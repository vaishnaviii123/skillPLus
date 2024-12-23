import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'

const HomeScreen = (props) => {
  return (
    <View>
        <Text>Home Screen</Text>
       <TouchableOpacity onPress={()=>{
        props.navigation.openDrawer();
       }}>
        <Text>open drawer</Text>
       </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
