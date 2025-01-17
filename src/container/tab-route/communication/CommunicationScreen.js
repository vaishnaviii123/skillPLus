import React from 'react';
import { View,Text, TouchableOpacity } from 'react-native';

const CommunicationScreen = (props) => {

  const falani_screen_par_le_jane_vala_funtion = () =>{
    props.navigation.navigate('TempScreen',{item:'vaish'})
  }
  return (
    <View>
      <TouchableOpacity onPress={falani_screen_par_le_jane_vala_funtion}>
      <Text>Communication Screen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CommunicationScreen
