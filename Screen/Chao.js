import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import firebase from 'firebase';

export default class Chao extends Component {
    render() {
      const {navigate} = this.props.navigation;
  return (
    <View>
      <Image source={{uri: 'https://i.chungta.vn/2017/12/22/LogoFPT-2017-copy-3042-1513928399.jpg'}} style={{width: 620, height: 454}} />
      <Button 
      title="NEXT" 
      onPress={()=> navigate('GioiThieu')}
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