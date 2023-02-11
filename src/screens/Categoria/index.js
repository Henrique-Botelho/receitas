import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet } from "react-native";

export default function Categoria({route, navigation}) {

    const [dados, setDados] = useState();
    const [loading, setLoading] = useState(true);

    if (route.params.nome == "entrada") {
        var tit = "Entradas"
    } else if (route.params.nome == "prato-principal") {
        var tit = "Pratos Principais"
    } else if (route.params.nome == "sobremesa") {
        var tit = "Sobremesas"
    } else if (route.params.nome == "sopa") {
        var tit = "Sopas"
    }

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
                <View style={styles.titulo}>
                    <Text style={styles.textTitulo}>{tit}</Text>
                </View>
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
        marginTop: 30
    },
    titulo:{
        backgroundColor: "#E9B440",
        width: "100%",
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        borderColor: "#B87333"
    },
    textTitulo:{
        color: "brown",
        fontSize: 30,
        textAlign:"center",
        fontWeight: "bold"
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
        width: "70%",
        borderRadius: 15,
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        borderColor: "#B87333"
    },
    text: {
        color: "brown",
        fontSize: 20,
        textAlign:"center"
    }
});