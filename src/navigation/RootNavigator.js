import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import AppStack from './AppStack';

const RootNavigator = () =>{
    return (
        <NavigationContainer>
          <AppStack/>
        </NavigationContainer>
    )
}

export default RootNavigator
