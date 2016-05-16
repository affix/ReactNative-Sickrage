import { StyleSheet } from 'react-native';
import StyleVars from 'sickrage/StyleVars';

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: StyleVars.Colors.mediumBackground
  },
  headingText: {
    color: StyleVars.Colors.primaryText,
    fontSize: 16,
    fontWeight: "600"
  },
  text: {
    color: StyleVars.Colors.primaryText,
    fontSize: 12,
    fontWeight: "400"
  },
  navBarTitleText: {
    color: StyleVars.Colors.navBarTitle,
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 22
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderColor: '#d6d7da',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  rightContainer: {
    flex: 1,
  },

  title: {
    fontSize: 20,
    marginTop: 8,
    textAlign: 'center',
  },
  airdate: {
    textAlign: 'center',
    fontSize: 10,
    marginBottom: 8,
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

});
