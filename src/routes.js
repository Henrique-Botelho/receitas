import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// Screens da aplicação
import Home from "./screens/Home";
import Categoria from "./screens/Categoria";
import Receita from "./screens/Receita";

export default function Routes() {
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Categoria" component={Categoria} />
            <Stack.Screen name="Receita" component={Receita} />
        </Stack.Navigator>
    );
}