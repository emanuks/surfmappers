import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Feed from './pages/Feed';

import logo from './assets/logo.png';

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name="Feed"
                    component={Feed}
                    options={{
                        headerTitle: () => (
                            <Image source={logo} />
                        ),
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#F5F5F5'
                        }
                    }}
                />
                <Screen
                    name="Post"
                    component={Post}
                    options={{
                        headerTitle: () => (
                            <Image source={logo} />
                        ),
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#F5F5F5'
                        }
                    }}
                />
            </Navigator>
        </NavigationContainer>
    )
}