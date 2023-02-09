import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Image, Text } from "react-native";

const Stack = createStackNavigator();

// Screens da aplicação
import Home from "./screens/Home";
import Categoria from "./screens/Categoria";
import Receita from "./screens/Receita";

import Header from "./components/Header";

export default function Routes() {
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="Home" 
                component={Home}
                options={{
                    headerRight: () => <Header />,
                    headerStyle: {
                        backgroundColor: "#E9B440"
                    },
                    headerTitle: "",
                    cardStyle: {
                        backgroundColor: "#FFEDED"
                    }
                }}
            />
            <Stack.Screen 
                name="Categoria"
                component={Categoria}
                options={{
                    headerRight: () => <Header />,
                    headerStyle: {
                        backgroundColor: "#E9B440"
                    },
                    headerTitle: "",
                    cardStyle: {
                        backgroundColor: "#FFEDED"
                    }
                }}
            />
            <Stack.Screen 
                name="Receita"
                component={Receita}
                options={{
                    headerRight: () => <Header />,
                    headerStyle: {
                        backgroundColor: "#E9B440"
                    },
                    headerTitle: "",
                    cardStyle: {
                        backgroundColor: "#FFEDED"
                    }
                }}
            />
        </Stack.Navigator>
    );
}