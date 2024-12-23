import React, { Component } from 'react'
import { Image, Text, View, } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import DrawerContainerStyles from './DrawerContainerStyles';
import DrawerTab from './DrawerTab';
import { SettingScreen } from '../../container/drawer-route/setting';
import { ProfileScreen } from '../../container/drawer-route/profile';

const Icon=require('../../assets/icons/home.png')

const DrawerContainer=props=>{
    return (
      <DrawerContentScrollView showsVerticalScrollIndicator={false}{...props}>
        <View style={DrawerContainerStyles.drawerContentMainView}>
          <DrawerTab
            name={SettingScreen}
            onPress={()=>{}}
            icon={Icon}
            label={'setting'}
          />
          <DrawerTab
            name={ProfileScreen}
            onPress={()=>{}}
            icon={Icon}
            label={'profile'}
          />
        </View>
      </DrawerContentScrollView>
    )
  
}
export default DrawerContainer
