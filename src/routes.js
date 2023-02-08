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
            <Stack.Screen 
                name="Home" 
                options={{
                    title: "",
                    cardStyle: {
                        backgroundColor: "#FFEDED",
                        flex: 1
                    },
                    headerStyle: {
                        backgroundColor: "#E9B440",
                    }
                }} 
                component={Home} 
            />
            <Stack.Screen 
                name="Categoria"
                options={{
                    title: "",
                    cardStyle: {
                        backgroundColor: "#FFEDED",
                        flex: 1
                    },
                    headerStyle: {
                        backgroundColor: "#E9B440",
                    }
                }}
                component={Categoria}
            />
            <Stack.Screen 
                name="Receita"
                options={{
                    title: "",
                    cardStyle: {
                        backgroundColor: "#FFEDED",
                        flex: 1
                    },
                    headerStyle: {
                        backgroundColor: "#E9B440",
                    }
                }}
                component={Receita}
            />
        </Stack.Navigator>
    );
}