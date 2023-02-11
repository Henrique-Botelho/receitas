import React from "react";
import { View, Text, StyleSheet , TouchableOpacity } from "react-native";

export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.links}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Categoria", {nome: "entrada"})}>
                    <Text style={styles.text}>Entradas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Categoria", {nome: "prato-principal"})}>
                    <Text style={styles.text}>Pratos Principais</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.links}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Categoria", {nome: "sobremesa"})}>
                    <Text style={styles.text}>Sobremesas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Categoria", {nome: "sopa"})}>
                    <Text style={styles.text}>Sopas</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    links: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: "space-evenly",
        margin: 20
    },
    btn: {
        backgroundColor: "#E9B440",
        tintColor: "#FFF",
        width: 160,
        height: 160,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        borderColor: "#B87333"
    },
    text: {
        color: "brown",
        textAlign: "center",
        fontSize: 25
    }
});