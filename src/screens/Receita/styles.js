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
    video: {
        width: "95%",
        borderRadius: 12,
        height: 215,
        padding: 10,
        backgroundColor: "#E9B440",
        borderWidth: 3,
        borderColor: "#B87333",
    },
    textos: {
        borderRadius: 15,
        backgroundColor: "#E9B440",
        width: "95%",
        flex: 0.8,
        height: "100%",
        padding: 10,
        justifyContent: "space-around",
        borderWidth: 3,
        borderColor: "#B87333"
    },
    tit: {
        color: "#B87333",
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
        borderBottomColor: "#B87333"
    },
    texto2: {
        justifyContent: "center",
        alignItems: "center"
    },
    text1: {
        color: "brown",
        fontSize: 15,
        textAlign: "justify",
        width: "80%"
    },
    text2: {
        color: "brown",
        fontSize: 15,
        textAlign: "justify",
    },
    det: {
        color: "#B87333",
        fontWeight: "bold",
        textAlign: "center"
    },
    det2: {
        color: "brown",
        textAlign: "center"
    },
    load: {
        marginTop: 80
    }
});