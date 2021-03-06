///////////////////////////////////////////////////////////////////////////
// Copyright © Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

//====================================================================================================================//
define([
  'dojo/_base/array',
  'dojo/_base/declare',
  'dojo/_base/lang',
  'dojo/Deferred',
  'dojo/DeferredList',
  'esri/geometry/geometryEngineAsync',
  'esri/tasks/BufferParameters',
  'esri/tasks/GeometryService',
  'esri/tasks/query',
  'esri/tasks/QueryTask'
  ], function (
    array,
    declare,
    lang,
    Deferred,
    DeferredList,
    geometryEngineAsync,
    BufferParameters,
    GeometryService,
    Query,
    QueryTask
  ) {
    return declare([], {

      /**
       * Constructor for class.
       * @param {object} map Map to hold created buffer graphics layer
       * @param {string} geometryServiceURL URL to geometry service
       * @memberOf Queryer#
       * @constructor
       */
      constructor: function (map, geometryServiceURL) {
        this.map = map;

        // Buffering tool
        this._geometryService = new GeometryService(geometryServiceURL);
      },


      /**
       * Unions a set of geometries into a single geometry.
       * @param {array} geometriesArray Geometries to union
       * @return {Deferred} Contains buffer upon resolution
       * @memberOf Queryer#
       */
      createUnionOfGeometries: function (geometriesArray) {
        var done;
        done = new Deferred();
        if (!Array.isArray(geometriesArray)) {
          done.reject('No geometries to buffer');
          return done;
        }
        geometryEngineAsync.union(geometriesArray).then(
          lang.hitch(this, function (unionedGeometries) {
          if (unionedGeometries) {
            done.resolve(unionedGeometries);
          } else {
            done.reject('Unioning failed');
          }
        }), lang.hitch(this, function () {
          done.reject('Unioning failed');
        }));
        return done;
      },

      /**
       * Bufferes a set of geometries and retrin a single geometry.
       * @param {array} geometriesArray Geometries to union
       * @param {array } distanceArray Contains buffer distance for each geometry
       * @return {Geometry} geometriesArray Contains buffered geometry
       * @memberOf Queryer#
       */
      bufferGeometries: function (geometriesArray, distanceArray) {
        var done, bufferParams;
        done = new Deferred();
        if (!Array.isArray(geometriesArray)) {
          done.reject('No geometries to buffer');
          return done;
        }
        // Buffer the geometries
        bufferParams = new BufferParameters();
        bufferParams.bufferSpatialReference = this.map.spatialReference;
        bufferParams.distances = distanceArray;
        bufferParams.unionResults = true;
        bufferParams.geodesic = true;
        bufferParams.geometries = geometriesArray;
        bufferParams.outSpatialReference = this.map.spatialReference;
        bufferParams.unit = GeometryService.UNIT_METER;

        this._geometryService.buffer(bufferParams, function (bufferedGeometries) {
          if (Array.isArray(bufferedGeometries) && bufferedGeometries.length > 0) {
            done.resolve(bufferedGeometries[0]);
          } else {
            done.reject('Buffering failed');
          }
        }, function (error) {
          done.reject('Buffering failed: ' + error);
          });
        return done;
      },

      /**
       * This function will return polygon geometries array by bufferring point/line geometries
       * @param {array} geometriesArray Geometries to union
       * @return {array } Polygon geometries array
       * @memberOf Queryer#
       */
      groupGeometriesByType: function (geometriesArray) {
        var pointGeometriesArray = [], polylineGeometriesArray = [],
          polygonGeometriesArray = [], pointDistance = [], polylineDistance = [];
        var done = new Deferred(), defArray;
        if (geometriesArray.length > 0) {
          //loop through all geometries and create array based on types
          //we are buffering point/line with 0.2 meters as after converting point/line to polygon
          //the existing logic will do inset buffer of -0.1
          array.forEach(geometriesArray, lang.hitch(this, function (geometry) {
            if (geometry.type === "point") {
              pointGeometriesArray.push(geometry);
              pointDistance.push(0.2);
            } else if (geometry.type === "polyline") {
              polylineGeometriesArray.push(geometry);
              polylineDistance.push(0.2);
            } else if (geometry.type === "polygon") {
              polygonGeometriesArray.push(geometry);
            }
          }));
          defArray = [];
          //if any point/line geometries exist then only perform buffer
          if (pointGeometriesArray.length > 0) {
            defArray.push(this.bufferGeometries(pointGeometriesArray, pointDistance));
          }
          if (polylineGeometriesArray.length > 0) {
            defArray.push(this.bufferGeometries(polylineGeometriesArray, polylineDistance));
          }
          //if any point/line geometries exist then only perform buffer
          //else it means all geometries are of type polygon
          if (defArray.length > 0) {
            var defList = new DeferredList(defArray);
            defList.then(lang.hitch(this, function (defData) {
              if (defData.length > 0) {
                for (var i = 0; i < defData.length; i++){
                  polygonGeometriesArray.push(defData[i][1]);
                }
                done.resolve(polygonGeometriesArray);
              }
            }), function (error) {
              done.reject('Buffering point/line geometires failed: ' + error);
            });
          } else {
            done.resolve(polygonGeometriesArray);
          }
        } else {
          done.resolve(geometriesArray);
        }
        return done;
      },

      /**
       * Unions a set of geometries into a single geometry and applies a buffer to the result.
       * @param {array} geometriesArray Geometries to union
       * @param {number} bufferDistanceMeters Buffer distance; if 0 and union of geometries is a polygon,
       *        -0.1 is used as the buffer distance to prevent the buffer from including extra geometries
       *        due to boundary fuzziness
       * @return {Deferred} Contains buffer upon resolution
       * @memberOf Queryer#
       */
      createBufferFromGeometries: function (geometriesArray, bufferDistanceMeters) {
        var done, distanceMeters, bufferParams;

        done = new Deferred();
        if (!Array.isArray(geometriesArray) || geometriesArray.length <= 0) {
          done.reject('No geometries to buffer');
          return done;
        }
        //this function will return polygon geometries array, if passed geometries is of point/line
        this.groupGeometriesByType(geometriesArray).then(lang.hitch(this, function (polygonGeometriesArray) {
          // Union the geometries; we union before buffering in case distanceMeters is <0 because buffer() sometimes
          // has problems with that
          distanceMeters = bufferDistanceMeters;
          geometryEngineAsync.union(polygonGeometriesArray).then(lang.hitch(this, function (unionedGeometries) {
            if (unionedGeometries) {
              if (distanceMeters > 0 || unionedGeometries.type === 'polygon') {
                if (distanceMeters === 0) {
                  distanceMeters = -0.1;  // inset polygons a bit to allow for boundary mismatches
                }

                // Buffer the geometries
                bufferParams = new BufferParameters();
                bufferParams.bufferSpatialReference = this.map.spatialReference;
                bufferParams.distances = [distanceMeters];
                bufferParams.geodesic = true;
                bufferParams.geometries = [unionedGeometries];
                bufferParams.outSpatialReference = this.map.spatialReference;
                bufferParams.unit = GeometryService.UNIT_METER;

                this._geometryService.buffer(bufferParams, function (bufferedGeometries) {
                  if (Array.isArray(bufferedGeometries) && bufferedGeometries.length > 0) {
                    done.resolve(bufferedGeometries[0]);
                  } else {
                    done.reject('Buffering failed');
                  }
                }, function (error) {
                  done.reject('Buffering failed: ' + error);
                });

              } else {
                done.resolve(unionedGeometries);
              }
            } else {
              done.reject('Unioning failed');
            }
          }), function (error) {
            done.reject(error);
          });
        }));

        return done;
      },

      /**
       * Find features that are intersected by a geometry, and then union them.
       * @param {object} intersectGeometry Geometry to use to find features
       * @param {string} featureLayerURL URL of feature service containing features to check
       * @param {array} outfields Desired feature fields to return
       * @return {Deferred} Contains union of found features upon resolution
       * @memberOf Queryer#
       */
      findIntersectingFeatures: function (intersectGeometry, featureLayerURL, outfields, layerExp, outSR) {
        var qTask, query, findResultsDef = new Deferred(), findResults = {};

        // Prep the query
        qTask = new QueryTask(featureLayerURL);
        query = new Query();  // defaults to "esriSpatialRelIntersects"
        if (intersectGeometry) {
          query.geometry = intersectGeometry;
        }
        query.returnGeometry = true;
        query.outFields = outfields;
        //if a valid layer expression found set it as a where condition
        if (layerExp) {
          query.where = layerExp;
        }
        //if out spatial refrence is defined set it
        if (outSR) {
          query.outSpatialReference = outSR;
        }

        // Execute query task for selecting intersecting/contains features
        qTask.execute(query, lang.hitch(this, function (featureSet) {
          if (featureSet && Array.isArray(featureSet.features) && featureSet.features.length > 0) {
            geometryEngineAsync.union(this._getFeatureGeometries(featureSet.features))
              .then(lang.hitch(this, function (unionedGeometries) {
                var bufferParams;

                if (Array.isArray(unionedGeometries.rings) && unionedGeometries.rings.length > 0) {
                  // Inset polygon geometries so that future use as selectors won't bring
                  // in superfluous areas
                  bufferParams = new BufferParameters();
                  bufferParams.bufferSpatialReference = this.map.spatialReference;
                  bufferParams.distances = [-0.1];
                  bufferParams.geodesic = true;
                  bufferParams.geometries = [unionedGeometries];
                  bufferParams.outSpatialReference = this.map.spatialReference;
                  bufferParams.unit = GeometryService.UNIT_METER;

                  this._geometryService.buffer(bufferParams, function (bufferedGeometries) {
                    if (Array.isArray(bufferedGeometries) && bufferedGeometries.length > 0) {
                      findResults.intersectGeometry = intersectGeometry;
                      findResults.features = featureSet.features;
                      findResults.highlight = bufferedGeometries[0];
                      findResultsDef.resolve(findResults);
                    } else {
                      findResultsDef.reject('Buffering union failed');
                    }
                  });
                } else {
                  // Return point and line geometries as-is
                  findResults.intersectGeometry = intersectGeometry;
                  findResults.features = featureSet.features;
                  findResults.highlight = unionedGeometries;
                  findResultsDef.resolve(findResults);
                }
              }
            ));
          } else {
            // No features; return only the intersect geometry
            findResults.intersectGeometry = intersectGeometry;
            findResults.features = [];
            findResults.highlight = null;
            findResultsDef.resolve(findResults);
          }
        }), function (error) {
          findResultsDef.reject(error);
        });

        return findResultsDef;
      },

      /**
       * Find features that are intersected by a geometry, and then union them.
       * @param {object} intersectGeometry Geometry to use to find features
       * @param {string} featureLayerURL URL of feature service containing features to check
       * @param {array} outfields Desired feature fields to return
       * @param {string} tag Label for clarifying log entry about number of features found
       * @param {string} layerExp Expression of filters applied on the layer in webmap/ OtherWidgets
       * @return {Deferred} Contains union of found features upon resolution
       * @memberOf Queryer#
       */
      find: function (intersectGeometry, featureLayerURL, outfields, tag, layerExp) {
        var findResultsDef = new Deferred();

        // Query for features in buffer
        this.findIntersectingFeatures(intersectGeometry, featureLayerURL, outfields, layerExp)
          .then(lang.hitch(this, function (findResults) {
            console.log(findResults.features.length + ' ' + tag + ' features found');
            findResultsDef.resolve(findResults);
          }), function (error) {
            findResultsDef.reject(error);
          });

        return findResultsDef;
      },

      /**
       * Extracts the geometries from a list of features
       * @param {array} features Features to work on
       * @return {array} List of geometries
       * @memberOf Queryer#
       */
      _getFeatureGeometries: function (features) {
        return array.map(features, lang.hitch(this, function (feature) {
          return feature.geometry;
        }));
      }

    });
  }
);
