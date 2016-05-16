'use strict';
import React, {
  Component,
} from 'react';

class SickrageApi extends React.Component {

  async fetchData(api_method = 'shows') {
    var api_key = "";
    var api_url = '';

    await fetch(api_url + api_key  + '/?cmd=' + api_method)
      .then((response) => response.json() )
      .then((responseData) => {
        return responseData.data;
      })
      .done();
  }
}

export default new SickrageApi
