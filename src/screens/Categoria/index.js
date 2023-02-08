import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet } from "react-native";

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
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        );
    } else {
        return(
            <View style={styles.container}>
                <FlatList
                    data={dados}
                    renderItem={({item,index}) => {
                        return(
                            <View style={styles.item}>
                                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Receita", item)}>
                                    <Text style={styles.text} >{item.nome}</Text>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                    style={styles.flatlist}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    flatlist: {
        width: "100%"
    },
    item: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 35
    },
    btn: {
        backgroundColor: "#E9B440",
        width: "80%",
        borderRadius: 15,
        height: 55,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "#FFF",
        fontSize: 20
    }
});