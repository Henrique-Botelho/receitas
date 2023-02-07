import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

export default function Home({navigation}){
    return(
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("Categoria", {nome: "entrada"})}>
                <Text>Entradas</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Categoria", {nome: "prato-principal"})}>
                <Text>Pratos Principais</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Categoria", {nome: "sobremesa"})}>
                <Text>Sobremesas</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Categoria", {nome: "vegano"})}>
                <Text>Veganos</Text>
            </TouchableOpacity>
        </View>
    );
}