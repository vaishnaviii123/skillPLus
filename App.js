import React, { Component } from 'react'
import {Text, View } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () =>{
    return (
      <SafeAreaProvider style={{flex:1}}>
        <RootNavigator/>
      </SafeAreaProvider>
    )
}

export default App
