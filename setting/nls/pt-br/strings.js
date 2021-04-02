﻿/*
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
    "title": "Configurações de Buffer e Pesquisa",
    "mainHint": "Você pode habilitar pesquisas de texto em endereços e feições, digitalização de geometria e criação de buffer."
  },
  "addressSourceSetting": {
    "title": "Camadas de Endereço",
    "mainHint": "Você pode especificar quais camadas do rótulo de destinatário estão disponíveis."
  },
  "notificationSetting": {
    "title": "Opções de Notificação",
    "mainHint": "Você pode especificar quais tipos de notificação estão disponíveis."
  },
  "groupingLabels": {
    "addressSources": "Camada para utilizar para selecionar as camadas de destinatário",
    "averyStickersDetails": "Todos os rótulos",
    "csvDetails": "Arquivo (CSV) de valores separados por vírgula",
    "drawingTools": "Ferramentas de desenho para especificar área",
    "featureLayerDetails": "Camada de feição",
    "geocoderDetails": "Geocodificador",
    "labelFormats": "Formatos de rótulo disponíveis",
    "printingOptions": "Opções para páginas de rótulo impressas",
    "searchSources": "Fontes de pesquisa",
    "stickerFormatDetails": "Parâmetros da página de rótulo"
  },
  "hints": {
    "alignmentAids": "Marcas adicionadas na página de rótulo para ajudá-lo a alinhar a página com sua impressora",
    "csvNameList": "Uma lista de nomes de campo com letra maiúscula e minúscula separados por vírgula",
    "horizontalGap": "Espaço entre dois rótulos em uma linha",
    "insetToLabel": "Espaço entre o lado do rótulo e o início do texto",
    "labelFormatDescription": "Como o estilo do rótulo é apresentado na lista de opções do formato de widget",
    "labelFormatDescriptionHint": "Dica da ferramenta para complementar a descrição na lista de opções do formato",
    "labelHeight": "Altura de cada rótulo na página",
    "labelWidth": "Largura de cada rótulo na página",
    "localSearchRadius": "Especifica o raio de uma área ao redor do centro do mapa atual que é utilizado para impulsionar o grau de candidatos de geocodificação de forma que os candidatos mais próximos ao local sejam retornados primeiro",
    "rasterResolution": "100 pixels por polegada correspondem aproximadamente à resolução da tela. Quanto maior a resolução, mais memória do navegador será necessária. Os navegadores diferem em sua capacidade de lidar graciosamente com grandes demandas de memória.",
    "selectionListOfOptionsToDisplay": "Os itens verificados são exibidos como opções no widget; altere a ordem conforme desejado",
    "verticalGap": "Espaço entre dois rótulos em uma coluna",
    "reviewButtonHint": "Permite que usuários revisem a seleção final na camada de destinatário selecionada"
  },
  "propertyLabels": {
    "bufferDefaultDistance": "Distância de buffer padrão",
    "bufferUnits": "Unidades de buffer para fornecer no widget",
    "countryRegionCodes": "Códigos de região ou país",
    "description": "Descrição",
    "descriptionHint": "Sugestão de descrição",
    "displayField": "Campo de visualização",
    "drawingToolsFreehandPolygon": "polígono à mão livre",
    "drawingToolsLine": "linha",
    "drawingToolsPoint": "ponto",
    "drawingToolsPolygon": "polígono",
    "drawingToolsPolyline": "polilinha",
    "enableLocalSearch": "Habilitar pesquisa de local",
    "exactMatch": "Combinação exata",
    "fontSizeAlignmentNote": "Tamanho da fonte para nota sobre as margens de impressão",
    "gridDarkness": "Grade escura",
    "gridlineLeftInset": "Inserir linha de grade esquerda",
    "gridlineMajorTickMarksGap": "Marcas de ponto maior a cada",
    "gridlineMinorTickMarksGap": "Marcas de ponto menor a cada",
    "gridlineRightInset": "Inserir linha de grade direita",
    "labelBorderDarkness": "Borda escura do rótulo",
    "labelBottomEdge": "Borda inferior dos rótulos na página",
    "labelFontSize": "Tamanho da fonte",
    "labelHeight": "Altura do rótulo",
    "labelHorizontalGap": "Intervalo horizontal",
    "labelInitialInset": "Inserir mo texto do rótulo",
    "labelLeftEdge": "Borda esquerda dos rótulos na página",
    "labelMaxLineCount": "Número máximo de linhas no rótulo",
    "labelPageHeight": "Altura da página",
    "labelPageWidth": "Largura da página",
    "labelRightEdge": "Borda direita dos rótulos na página",
    "labelsInAColumn": "Número de rótulos em uma coluna",
    "labelsInARow": "Número de rótulos em uma linha",
    "labelTopEdge": "Borda superior dos rótulos na página",
    "labelVerticalGap": "Intervalo vertical",
    "labelWidth": "Largura do rótulo",
    "limitSearchToMapExtent": "Somente pesquisar na extensão de mapa atual",
    "maximumResults": "Máximo de resultados",
    "maximumSuggestions": "Máximo de sugestões",
    "minimumScale": "Escala mínima",
    "name": "Nome",
    "percentBlack": "% preto",
    "pixels": "pixels",
    "pixelsPerInch": "pixels por polegada",
    "placeholderText": "Texto de local reservado",
    "placeholderTextForAllSources": "Texto de local reservado para pesquisar todas as fontes",
    "radius": "Raio",
    "rasterResolution": "Resolução do raster",
    "searchFields": "Campos de pesquisa",
    "showAlignmentAids": "Mostrar alinhamento na página",
    "showGridTickMarks": "Mostrar marcas de ponto da grade",
    "showLabelOutlines": "Mostrar contornos do rótulo",
    "showPopupForFoundItem": "Mostrar pop-up do local ou feição localizada",
    "tool": "Ferramentas",
    "units": "Unidades",
    "url": "URL",
    "urlToGeometryService": "URL para serviço de geometria",
    "useRelatedRecords": "Utilize seus registros relacionados",
    "useSecondarySearchLayer": "Utilizar camada de seleção secundária",
    "useSelectionDrawTools": "Utilizar ferramentas de desenho de seleção",
    "useVectorFonts": "Utilizar fontes vetoriais (Fonte em latin somente)",
    "addCSVHeader": "Adicionar título da coluna (para CSV somente)",
    "zoomScale": "Escala de zoom",
    "reviewCheckboxLabel": "Mostrar botão de revisão no widget"
  },
  "buttons": {
    "addAddressSource": "Adicionar camada contendo rótulos de endereço em seu pop-up",
    "addLabelFormat": "Adicionar um formato de rótulo",
    "addSearchSource": "Adicionar uma fonte de pesquisa",
    "set": "Configurar"
  },
  "placeholders": {
    "averyExample": "Ex: Todos os rótulos ${averyPartNumber}",
    "countryRegionCodes": "ex: USA,CHN",
    "descriptionCSV": "Valores separados por vírgula (CSV)",
    "descriptionPDF": "Rótulo do PDF ${heightLabelIn} x ${widthLabelIn} polegadas; ${labelsPerPage} por página"
  },
  "tooltips": {
    "getWebmapFeatureLayer": "Obtenha a camada de feição do mapa da web",
    "openCountryCodes": "Clique para obter mais informações sobre códigos",
    "openFieldSelector": "Clique para abrir um seletor de campo",
    "setAndValidateURL": "Definir e validar a URL"
  },
  "problems": {
    "noAddresseeLayers": "Especifique pelo menos uma camada de destinatário",
    "noBufferUnitsForDrawingTools": "Configure pelo menos uma unidade de buffer para as ferramentas de desenho",
    "noBufferUnitsForSearchSource": "Configure pelo menos uma unidade de buffer para a fonte de pesquisa \"${sourceName}\"",
    "noGeometryServiceURL": "Configure a URL para o serviço de geometria",
    "noNotificationLabelFormats": "Especifique pelo menos um formato do rótulo de notificação",
    "noSearchSourceFields": "Configure um ou mais campos de pesquisa para a fonte de pesquisa \"${sourceName}\"",
    "noSearchSourceURL": "Configure a URL da fonte de pesquisa \"${sourceName}\"",
    "noSearchSourcesConfigured": "Configure pelo menos uma fonte de pesquisa",
    "noSearchSourceFeaureLayerConfigured": "Configure pelo menos uma camada de feição como fonte de pesquisa para utilizar as ferramentas de desenho de seleção"
  },
  "querySourceSetting": {
    "sourceSetting": "Configurações da fonte de pesquisa",
    "instruction": "Adicione e configure serviços de geocódigo ou camadas de feição como fontes de pesquisa. Estas fontes especificadas determinam o que é pesquisável dentro da caixa de pesquisa.",
    "add": "Adicionar fonte de pesquisa",
    "addGeocoder": "Adicionar geocodificador",
    "geocoder": "Geocodificador",
    "setLayerSource": "Configurar fonte da camada",
    "setGeocoderURL": "Configurar URL do Geocodificador",
    "searchableLayer": "Camada de feição",
    "name": "Nome",
    "countryCode": "Códigos de região e país",
    "countryCodeEg": "por exemplo ",
    "countryCodeHint": "Deixar este valor em branco pesquisará todos os países e regiões",
    "generalSetting": "Configurações gerais",
    "allPlaceholder": "Texto de local reservado para pesquisar todos: ",
    "showInfoWindowOnSelect": "Mostrar pop-up do local ou feição localizada",
    "showInfoWindowOnSelect2": "Mostrar pop-up quando a feição ou localização for encontrada.",
    "searchInCurrentMapExtent": "Somente pesquisar na extensão de mapa atual",
    "zoomScale": "Escala de zoom",
    "locatorUrl": "URL do Geocodificador",
    "locatorName": "Nome de geocodificador",
    "locatorExample": "Exemplo",
    "locatorWarning": "Esta versão do serviço de geocodificação não é suportado. O widget suporta serviço de geocodificação 10.1 e superior.",
    "locatorTips": "As sugestões não estão disponíveis, pois o serviço de geocodificação não suporta o recursos de sugestão.",
    "layerSource": "Fonte da camada",
    "searchLayerTips": "As sugestões não estão disponíveis, pois o serviço da feição não suporta o recursos de paginação.",
    "placeholder": "Texto de local reservado",
    "searchFields": "Procurar campos",
    "displayField": "Campo de visualização",
    "exactMatch": "Combinação exata",
    "maxSuggestions": "Máximo de sugestões",
    "maxResults": "Máximo de resultados",
    "enableLocalSearch": "Habilitar pesquisa de local",
    "minScale": "Escala mínima",
    "minScaleHint": "Quando a escala do mapa for maior que esta escala, a pesquisa de local será aplicada",
    "radius": "Proporção",
    "radiusHint": "Especifica o raio de uma área ao redor do centro do mapa atual que é utilizado para impulsionar o grau de candidatos de geocodificação de forma que os candidatos mais próximos ao local sejam retornados primeiro",
    "meters": "Metros",
    "setSearchFields": "Definir campos de pesquisa",
    "set": "Configurar",
    "fieldSearchable": "pesquisável",
    "fieldName": "Nome",
    "fieldAlias": "Nome Alternativo",
    "ok": "OK",
    "cancel": "Cancelar",
    "invalidUrlTip": "A URL ${URL} é inválida ou inacessível.",
    "locateResults": "Localizar resultados",
    "panTo": "Mover para",
    "zoomToScale": "Zoom na escala",
    "locatorError": "O localizador deve suportar a localização de linha única."
  }
});