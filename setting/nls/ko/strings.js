/*
 | Copyright 2017 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define({
  "searchSourceSetting": {
    "title": "검색 및 버퍼 설정",
    "mainHint": "주소 및 피처의 텍스트 검색, 지오메트리 디지털화, 버퍼링을 활성화할 수 있습니다."
  },
  "addressSourceSetting": {
    "title": "주소 레이어",
    "mainHint": "사용 가능한 수신인 레이블 레이어를 지정할 수 있습니다."
  },
  "notificationSetting": {
    "title": "알림 옵션",
    "mainHint": "사용 가능한 알림 유형을 지정할 수 있습니다."
  },
  "groupingLabels": {
    "addressSources": "수신인 레이어 선택에 사용할 레이어",
    "averyStickersDetails": "Avery(r) 스티커",
    "csvDetails": "쉼표로 구분된 값(CSV) 파일",
    "drawingTools": "영역 지정을 위한 그리기 도구",
    "featureLayerDetails": "피처 레이어",
    "geocoderDetails": "지오코더",
    "labelFormats": "사용 가능한 레이블 형식",
    "printingOptions": "인쇄된 레이블 페이지의 옵션",
    "searchSources": "검색 원본",
    "stickerFormatDetails": "레이블 페이지 매개변수"
  },
  "hints": {
    "alignmentAids": "레이블 페이지에 추가된 표시를 통해 페이지를 프린터에 맞춰 정렬할 수 있음",
    "csvNameList": "대소문자 구분 필드 이름 목록(쉼표로 구분됨)",
    "horizontalGap": "한 행 내 두 레이블 간의 공간",
    "insetToLabel": "레이블 측면과 텍스트 첫 부분 간의 공간",
    "labelFormatDescription": "위젯 형식 옵션 목록에 레이블 스타일이 표시되는 방식",
    "labelFormatDescriptionHint": "형식 옵션 목록에 설명을 보충하기 위한 도구 팁",
    "labelHeight": "페이지 내 각 레이블의 높이",
    "labelWidth": "페이지 내 각 레이블의 너비",
    "localSearchRadius": "위치에 가장 가까운 후보가 먼저 반환되도록 지오코딩 후보의 순위를 높이는 데 사용되는 현재 맵 중심 주변 영역의 반경을 지정합니다.",
    "rasterResolution": "인치당 100픽셀은 화면 해상도와 거의 일치합니다. 해상도가 높을수록 더 많은 브라우저 메모리가 필요합니다. 브라우저에 따라 대용량 메모리 수요를 처리하는 성능이 다릅니다.",
    "selectionListOfOptionsToDisplay": "선택한 항목은 위젯에서 옵션으로 표시되며 그 순서를 원하는 대로 변경할 수 있음",
    "verticalGap": "한 열 내 두 레이블 간의 공간",
    "reviewButtonHint": "사용자가 선택한 수신인 레이어에서 최종 선택 항목을 검토할 수 있습니다."
  },
  "propertyLabels": {
    "bufferDefaultDistance": "기본 버퍼 거리",
    "bufferUnits": "위젯에 제공될 버퍼 단위",
    "countryRegionCodes": "국가 또는 지역 코드",
    "description": "설명",
    "descriptionHint": "설명 힌트",
    "displayField": "디스플레이 필드",
    "drawingToolsFreehandPolygon": "자유곡선 폴리곤",
    "drawingToolsLine": "선",
    "drawingToolsPoint": "point",
    "drawingToolsPolygon": "polygon",
    "drawingToolsPolyline": "polyline",
    "enableLocalSearch": "로컬 검색 사용",
    "exactMatch": "정확히 일치",
    "fontSizeAlignmentNote": "인쇄 여백에 대한 참고 사항의 글꼴 크기",
    "gridDarkness": "그리드 인쇄 농도",
    "gridlineLeftInset": "왼쪽 그리드 라인 삽입",
    "gridlineMajorTickMarksGap": "각각의 장축 표식점",
    "gridlineMinorTickMarksGap": "각각의 단축 표식점",
    "gridlineRightInset": "오른쪽 그리드 라인 삽입",
    "labelBorderDarkness": "레이블 테두리 인쇄 농도",
    "labelBottomEdge": "페이지 레이블의 아래쪽 가장자리",
    "labelFontSize": "글꼴 크기",
    "labelHeight": "레이블 높이",
    "labelHorizontalGap": "수평 갭",
    "labelInitialInset": "레이블 텍스트에 삽입",
    "labelLeftEdge": "페이지 레이블의 왼쪽 가장자리",
    "labelMaxLineCount": "레이블 내 최대 라인 수",
    "labelPageHeight": "페이지 높이",
    "labelPageWidth": "페이지 너비",
    "labelRightEdge": "페이지 레이블의 오른쪽 가장자리",
    "labelsInAColumn": "한 열 내의 레이블 수",
    "labelsInARow": "한 행 내의 레이블 수",
    "labelTopEdge": "페이지 레이블의 위쪽 가장자리",
    "labelVerticalGap": "수직 갭",
    "labelWidth": "레이블 너비",
    "limitSearchToMapExtent": "현재 맵 범위에서만 검색",
    "maximumResults": "최대 결과",
    "maximumSuggestions": "최대 추천 수",
    "minimumScale": "최소 축척",
    "name": "이름",
    "percentBlack": "% 검은색",
    "pixels": "픽셀",
    "pixelsPerInch": "인치당 픽셀 수",
    "placeholderText": "플레이스 홀더 텍스트",
    "placeholderTextForAllSources": "모든 원본을 검색하기 위한 플레이스 홀더 텍스트:",
    "radius": "반경",
    "rasterResolution": "래스터 해상도",
    "searchFields": "검색 필드",
    "showAlignmentAids": "페이지에 정렬 보조 기능 표시",
    "showGridTickMarks": "그리드 표식점 표시",
    "showLabelOutlines": "레이블 윤곽선 표시",
    "showPopupForFoundItem": "발견한 피처 또는 위치에 대해 팝업 보기",
    "tool": "도구",
    "units": "단위",
    "url": "URL",
    "urlToGeometryService": "지오메트리 서비스 URL",
    "useRelatedRecords": "관련 레코드 사용",
    "useSecondarySearchLayer": "보조 선택 레이어 사용",
    "useSelectionDrawTools": "선택 항목 그리기 도구 사용",
    "useVectorFonts": "벡터 글꼴 사용(라틴 글꼴만 해당)",
    "addCSVHeader": "열 제목 추가(CSV만 해당)",
    "zoomScale": "확대 축척",
    "reviewCheckboxLabel": "위젯에 검토 버튼 표시"
  },
  "buttons": {
    "addAddressSource": "해당 팝업에 주소 레이블이 포함된 레이어 추가",
    "addLabelFormat": "레이블 형식 추가",
    "addSearchSource": "검색 원본 추가",
    "set": "설정"
  },
  "placeholders": {
    "averyExample": "예: Avery(r) 레이블 ${averyPartNumber}",
    "countryRegionCodes": "예: USA,CHN",
    "descriptionCSV": "쉼표로 구분된 값(CSV)",
    "descriptionPDF": "PDF 레이블 ${heightLabelIn} x ${widthLabelIn}인치, 페이지당 ${labelsPerPage}개"
  },
  "tooltips": {
    "getWebmapFeatureLayer": "웹 맵에서 피처 레이어 가져오기",
    "openCountryCodes": "코드에 대한 자세한 내용을 알아보려면 클릭",
    "openFieldSelector": "필드 선택기를 열려면 클릭",
    "setAndValidateURL": "URL 설정 및 유효성 검사"
  },
  "problems": {
    "noAddresseeLayers": "수신인 레이어를 하나 이상 지정하세요.",
    "noBufferUnitsForDrawingTools": "그리기 도구의 버퍼 단위를 하나 이상 구성하세요.",
    "noBufferUnitsForSearchSource": "검색 원본 \"${sourceName}\"의 버퍼 단위를 하나 이상 구성하세요.",
    "noGeometryServiceURL": "지오메트리 서비스의 URL을 구성하세요.",
    "noNotificationLabelFormats": "알림 레이블 형식을 하나 이상 지정하세요.",
    "noSearchSourceFields": "검색 원본 \"${sourceName}\"의 검색 필드를 하나 이상 구성하세요.",
    "noSearchSourceURL": "검색 원본 \"${sourceName}\"의 URL을 구성하세요.",
    "noSearchSourcesConfigured": "검색 원본을 하나 이상 구성하세요.",
    "noSearchSourceFeaureLayerConfigured": "선택 항목 그리기 도구 사용을 위한 검색 원본으로 피처 레이어를 하나 이상 구성하세요."
  },
  "querySourceSetting": {
    "sourceSetting": "원본 설정 검색",
    "instruction": "지오코드 서비스 또는 피처 레이어를 검색 원본으로 추가하고 구성합니다. 이와 같은 지정된 원본에 따라 검색 상자 내에서 검색 가능한 항목이 결정됩니다.",
    "add": "검색 원본 추가",
    "addGeocoder": "지오코더 추가",
    "geocoder": "지오코더",
    "setLayerSource": "레이어 원본 설정",
    "setGeocoderURL": "지오코더 URL 설정",
    "searchableLayer": "피처 레이어",
    "name": "이름",
    "countryCode": "국가 또는 지역 코드",
    "countryCodeEg": "예시: ",
    "countryCodeHint": "이 값을 비워 두면 모든 국가와 지역이 검색됩니다.",
    "generalSetting": "일반 설정",
    "allPlaceholder": "모두 검색하기 위한 플레이스 홀더 텍스트: ",
    "showInfoWindowOnSelect": "발견한 피처 또는 위치에 대해 팝업 보기",
    "showInfoWindowOnSelect2": "피처나 위치를 찾은 경우 팝업을 표시합니다.",
    "searchInCurrentMapExtent": "현재 맵 범위에서만 검색",
    "zoomScale": "확대 축척",
    "locatorUrl": "지오코더 URL",
    "locatorName": "지오코더 이름",
    "locatorExample": "사례",
    "locatorWarning": "해당 지오코딩 서비스 버전은 지원되지 않습니다. 지오코딩 서비스 10.1 이상이 위젯에서 지원됩니다.",
    "locatorTips": "지오코딩 서비스에서 추천 기능을 지원하지 않기 때문에 추천을 사용할 수 없습니다.",
    "layerSource": "레이어 원본",
    "searchLayerTips": "피처 서비스에서 페이지 매김 기능을 지원하지 않기 때문에 제안 사항을 사용할 수 없습니다.",
    "placeholder": "플레이스 홀더 텍스트",
    "searchFields": "검색 필드",
    "displayField": "디스플레이 필드",
    "exactMatch": "정확히 일치",
    "maxSuggestions": "최대 추천 수",
    "maxResults": "최대 결과",
    "enableLocalSearch": "로컬 검색 사용",
    "minScale": "최소 축척",
    "minScaleHint": "맵 축척이 이 축척보다 큰 경우 로컬 검색이 적용됨",
    "radius": "반경",
    "radiusHint": "위치와 가장 가까운 후보가 제일 먼저 반환되도록 지오코딩 후보의 순위를 올리는 데 사용되는 현재 맵 중심 주변 영역의 반경을 지정함",
    "meters": "미터",
    "setSearchFields": "검색 필드 설정",
    "set": "설정",
    "fieldSearchable": "검색 가능",
    "fieldName": "이름",
    "fieldAlias": "별칭",
    "ok": "확인",
    "cancel": "취소",
    "invalidUrlTip": "${URL} URL이 잘못되었거나 접근할 수 없습니다.",
    "locateResults": "결과 찾기",
    "panTo": "이동",
    "zoomToScale": "축척으로 확대/축소",
    "locatorError": "로케이터는 단일 라인 찾기를 지원해야 합니다."
  }
});