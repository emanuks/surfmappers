import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Feed from './pages/Feed';

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
            <Navigator>
                <Screen 
                    name="Feed" 
                    component={Feed} 
                />
            </Navigator>
        </NavigationContainer>
    )
}