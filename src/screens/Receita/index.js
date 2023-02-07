import React from "react";
import { View, Text } from "react-native";

export default function Receita({route}) {
    return(
        <View>
            <Text>Autor: {route.params.autor}</Text>
            <Text>Tipo: {route.params.tipo}</Text>
            <Text>Nome: {route.params.nome}</Text>
            <Text>Tempo de Preparo: {route.params.tempo_preparo}</Text>
            <Text>Rendimento: {route.params.rendimento}</Text>
            <Text>Ingredientes: {route.params.ingredientes}</Text>
            <Text>Modo de Preparo: {route.params.modo_preparo}</Text>
            <Text>Video: {route.params.video}</Text>
        </View>
    );
}