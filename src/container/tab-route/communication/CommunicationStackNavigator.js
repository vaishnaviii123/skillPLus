import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CommunicationScreen from "./CommunicationScreen";
import TempScreen from "./tempScreen";
const Stack = createNativeStackNavigator();
const CommunicationStackNavigation = () => {
    return (
    

        <Stack.Navigator initialRouteName="CommunicationScreen"
            screenOptions={{
                headerMode: 'screen',
            }}
        >
            <Stack.Screen
                name="CommunicationScreen"
                component={CommunicationScreen}
                options={{
                    headerShown: false,
                    gestureEnabled: true,
                }}
            />
            
            <Stack.Screen
                name="TempScreen"
                component={TempScreen}
                options={{
                    headerShown: false,
                    gestureEnabled: true,
                }}
            />
          

        </Stack.Navigator>
    );
};

export default CommunicationStackNavigation;

