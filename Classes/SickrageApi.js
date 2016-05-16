'use strict';
import React, {
  Component,
} from 'react';

class SickrageApi extends React.Component {

  async fetchData(api_method = 'shows') {
    var api_key = "322b9e55bab33c9d2def9d408bbd8ca7";
    var api_url = 'http://echidna.seedboxes.cc:34892/api/';

    await fetch(api_url + api_key  + '/?cmd=' + api_method)
      .then((response) => response.json() )
      .then((responseData) => {
        return responseData.data;
      })
      .done();
  }
}

export default new SickrageApi
