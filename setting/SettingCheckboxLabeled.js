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
  'dojo/_base/declare',
  'dojo/_base/lang',
  'dojo/on',
  './settingComponents',
  './SettingObject'
], function (
  declare,
  lang,
  on,
  settingComponents,
  SettingObject
) {
  return declare(SettingObject, {
    _inputControl: null,

    //================================================================================================================//

    /**
     * Constructor for class.
     * @param {string} name Name for component
     * @param {string?} widthClass Class(es) to use for overall width of component
     * @param {string?} leftColWidthClass Class(es) to use for left column
     * @param {string?} rightColWidthClass Class(es) to use for right column
     * @param {string} label Component's label
     * @param {string?} hint Hint text to display in component
     * @param {function?} onChange Function to call when component changes
     * @memberOf SettingCheckboxLabeled#
     * @constructor
     */
    constructor: function (name, widthClass, leftColWidthClass, rightColWidthClass,
      label, hint, onChange) {
      /*jshint unused:false*/
      var valueItems = [], subcomponent;

      subcomponent = settingComponents.checkboxCtl('inline-block', false, label);
      valueItems.push(subcomponent.div);
      this._inputControl = subcomponent.ctl;
      if (onChange) {
        this.own(on(this._inputControl, 'change', lang.hitch(this, onChange)));
      }

      if (hint) {
        valueItems.push(settingComponents.text('hint', hint));
      }

      // Assemble label/value pair
      this._mainDiv = settingComponents.container('flexbox ' + (widthClass || ''), 'minorTrailingHorizGap', [
        settingComponents.container('inline-block ' + (leftColWidthClass ? leftColWidthClass : ''), '', []),
        settingComponents.container('inline-block ' + (rightColWidthClass ? rightColWidthClass : ''),
          'minorTrailingVertGap', valueItems)
      ]);
    },

    /**
     * Sets the component's value
     * @param {boolean} value Value to apply
     * @memberOf SettingCheckboxLabeled#
     */
    setValue: function (value) {
      if (this._inputControl) {
        this._inputControl.setValue(value);
      }
    },

    /**
     * Returns the component's value.
     * @return {boolean} State of component
     * @memberOf SettingCheckboxLabeled#
     */
    getValue: function () {
      if (this._inputControl) {
        return this._inputControl.getValue();
      }
    },

    /**
     * Sets the component's configuration using the property matching the component's name.
     * @param {object} config Configuration item; if the component does not have a name, the component is not changed;
     *        otherwise, the component's name is used to get the property with its configuration
     * @memberOf SettingCheckboxLabeled#
     */
    setConfig: function () {
      if (this._inputControl && this._config) {
        this.setValue(this._config);
      }
    },

    /**
     * Gets the component's configuration using the property matching the component's name.
     * @param {object} config Configuration item; if the component does not have a name, config is not changed;
     *        otherwise, the component's name is used to create a property in config with the component's
     *        configuration
     * @param {array} problems List of problems found so far in the widget; if this component has a problem,
     *        it should push a string onto the list with a description
     * @memberOf SettingCheckboxLabeled#
     */
    /*jshint unused:false*/
    getConfig: function (config, problems) {
      if (this._inputControl) {
        this._config = this.getValue();
      }
    }

    //================================================================================================================//
  });
});
