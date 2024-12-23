import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const DrawerTab = ({name,onPress,icon,label}) =>{
    return (
      <TouchableOpacity>
       <Text>{label}</Text>
      </TouchableOpacity>
    )
}

export default DrawerTab
