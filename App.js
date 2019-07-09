/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, CheckBox } from 'react-native';
import AddItem from './src/components/add_items';
import CheckList from './src/components/check_list';
import todoData from './data/section_list_data';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    addItemId: null,
  }
  refreshSectionList = (activeKey) => {
    this.setState((prevState) => {
        return {
            addItemId: activeKey
        };
    });
}
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AddItem parentList={this}/>
        <CheckList ref="sectionList"/>
        <CheckBox
          style={{ backgroundColor: 'pink', width: 10, height: 10 }}
          onValueChange={() => { console.log(todoData); }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
