import React, { Component } from 'react'
import { Text, View } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { persistor, store } from './src/Redux/config';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

if (__DEV__) {
  import('./ReactronConfig').then(() => console.log('Reactotron Configured'));
}


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider style={{ flex: 1 }}>
            <RootNavigator />
          </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}

export default App;


