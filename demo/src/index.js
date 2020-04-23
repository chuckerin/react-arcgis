import React from 'react';
import ReactDOM from 'react-dom';

import { Map } from '@esri/react-arcgis';
import BermudaTriangle from './BermudaTriangle';
import MyFeatureLayer from './MyFeatureLayer';

ReactDOM.render(
  <Map
    mapProperties={{ basemap: 'national-geographic' }}
    viewProperties={{
        center: [-93, 39],
        zoom: 5
    }}>
    {/* <BermudaTriangle /> */}
    {/* <MyFeatureLayer
      featureLayerProperties={{
        url: 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Time_Zones/FeatureServer/0'
      }}
    >
    </MyFeatureLayer> */}
  </Map>,
  document.getElementById('root')
);