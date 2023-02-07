import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";

export default function Categoria({route, navigation}) {

    const [dados, setDados] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const pegaDados = async () => {
            await fetch(`https://receitas3dm.up.railway.app/receitas/${route.params.nome}?key=4WAPlNmInAy2ZTkIAMy9`)
                .then((response) => response.json())
                .then((data) => {
                    setDados(data);
                    setLoading(false);
                })
                .catch((err) => {
                    return console.log(err);
                });
        }
        pegaDados();
    },[]);

    if(loading) {
        return(
            <View>
                <ActivityIndicator size="large" />
            </View>
        );
    } else {
        return(
            <View>
                <FlatList
                    data={dados}
                    renderItem={({item,index}) => {
                        return(
                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate("Receita", item)}>
                                    <Text>{item.nome}</Text>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                />
            </View>
        );
    }
}