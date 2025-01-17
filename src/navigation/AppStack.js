import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from './drawer/DrawerNavigator';
import BottomTabNavigator from './bottom-tab/BottomTabNavigator';
const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="BottomTabNavigator">
    
      <Stack.Screen
        name={'BottomTabNavigator'}
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
