import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from 'firebase';

export default class GioiThieu extends Component {
    render() {
      const {navigate} = this.props.navigation;
  return (
    <View>
      <Button 
      title="Welcome to my APP"
      onPress={()=> navigate('Add')}
      />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});