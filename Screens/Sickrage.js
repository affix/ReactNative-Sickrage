import React, {
  Component,
} from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  AlertIOS,
  Navigator,
} from 'react-native';

import SickrageApi from 'sickrage/Classes/SickrageApi'

import SharedStyles from 'sickrage/SharedStyles'

var data = null;

export default class Sickrage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    data = SickrageApi.fetchData();
    if(data == null)
    {
      console.log("Error fetching data");
    }
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data),
      loaded: true,
    })
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderShow}
        style={SharedStyles.listView}
      />
    );
  }
  renderLoadingView() {
    return (
      <View style={SharedStyles.container}>
        <Text>
          Loading Episodes...
        </Text>
      </View>
    );
  }
  renderShow(show) {
    if(show == null)
    {
      show = {"show_name": "ERROR RETREIVING DATA", "AIRDATE": "0000-00-00"}
    }
    return (
      <View style={SharedStyles.container}>
        <View style={SharedStyles.rightContainer}>
          <Text style={SharedStyles.title}>{show.show_name}</Text>
          <Text style={SharedStyles.airdate}>
            Next Air Date : {show.next_ep_airdate}
          </Text>
        </View>
      </View>
    );
  }
}
