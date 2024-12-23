import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from './drawer/DrawerNavigator';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="DrawerNavigator">
      <Stack.Screen
        name={'DrawerNavigator'}
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
