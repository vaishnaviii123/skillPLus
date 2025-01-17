import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../../container/tab-route/home';
import CommunicationStackNavigation from '../../container/tab-route/communication/CommunicationStackNavigator';
import {ProfileScreen} from '../../container/drawer-route/profile';
import BottomTabStyles from './BottomTabStyles';

const Tab = createBottomTabNavigator();

const TabLabel = ({label, focused}) => {
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize:15,fontWeight:'bold',lineHeight:15}}>{label}</Text>
    </View>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
     initialRouteName="HomeScreen"
     screenOptions={{
      headerShown:false
     }}
     >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <TabLabel label={'home'} focused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../../assets/icons/home.png')
                  : require('../../assets/icons/homedis.png')
              }
              style={BottomTabStyles.iconStyle}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CommunicationStackNavigation"
        component={CommunicationStackNavigation}
        options={{
          tabBarLabel: ({focused}) => (
            <TabLabel label={'communication'} focused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../../assets/icons/home.png')
                  : require('../../assets/icons/homedis.png')
              }
              style={BottomTabStyles.iconStyle}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <TabLabel label={'profile'} focused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../../assets/icons/home.png')
                  : require('../../assets/icons/homedis.png')
              }
              style={BottomTabStyles.iconStyle}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
