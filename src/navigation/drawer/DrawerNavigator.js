import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from '../bottom-tab/BottomTabNavigator';
import { ProfileScreen } from '../../container/drawer-route/profile';
import { CommunicationScreen } from '../../container/tab-route/communication';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    initialRouteName={'ProfileScreen'}
    >
      {/* <Drawer.Screen name="Tab" component={BottomTabNavigator} /> */}
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <Drawer.Screen name="CommunicationScreen" component={CommunicationScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
