import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 10
    },
    titulo:{
        backgroundColor: "#E9B440",
        borderRadius: 15,
        width: "80%",
        justifyContent: "center",
        alignItems: "center"
    },
    textTitulo:{
        color: "#FFF",
        fontSize: 30,
        textAlign:"center",
        fontWeight: "bold"
    },
    video: {
        width: "95%",
        borderRadius: 12,
        height: 215,
        padding: 10,
        backgroundColor: "#E9B440"
    },
    textos: {
        borderRadius: 15,
        backgroundColor: "#E9B440",
        width: "95%",
        flex: 0.8,
        height: "100%",
        padding: 10,
        justifyContent: "space-around"
    },
    tit: {
        color: "#000",
        fontSize: 25,
        padding: 5,
        borderRadius: 15,
        fontWeight: "bold"
    },
    texto1: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "black"
    },
    texto2: {
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "#FFF",
        fontSize: 15,
        textAlign: "justify"
    }
});