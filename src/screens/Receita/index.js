import React from "react";
import { View, Text, StyleSheet } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import * as ScreenOrientation from 'expo-screen-orientation';

export default function Receita({route}) {
    return(
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Text style={styles.textTitulo}>{route.params.nome}</Text>
            </View>
            <View style={styles.video}>
                <YoutubeIframe
                    videoId={route.params.video}
                    height={300}
                    onFullScreenChange={(isFullScreen) => {
                        if (isFullScreen) {
                            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
                        } else {
                            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
                        }
                    }}
                    style
                />
            </View>

            <View style={styles.textos}>
                <View style={styles.texto1}>
                    <View style={styles.texto1_1}>
                        <Text>Tempo de Preparo</Text>
                        <Text>{route.params.tempo_preparo}</Text>
                    </View>
                    <View style={styles.texto1_1}>
                        <Text>Rendimento</Text>
                        <Text>{route.params.rendimento}</Text>
                    </View>
                </View>
                <View style={styles.texto2}>
                    <Text>Ingredientes</Text>
                </View>
                <View style={styles.texto3}>
                    <Text>{route.params.ingredientes}</Text>
                </View>
                <View style={styles.texto4}>
                    <Text>Modo de Preparo</Text>
                </View>
                <View style={styles.texto5}>
                    <Text>{route.params.modo_preparo}</Text>
                </View>
                <View style={styles.texto6}>
                    <Text>Autor: {route.params.autor}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth: 7
    },
    titulo:{
        backgroundColor: "#E9B440",
        borderColor: "red",
        borderWidth: 7,
        borderRadius: 15,
        width: "80%",
        justifyContent: "center",
        alignItems: "center"
    },
    textTitulo:{
        color: "#FFF",
        fontSize: 30
    },
    video: {
        borderWidth: 7,
        borderColor: "green",
        width: "95%",
        borderRadius: 12,
        height: 215,
        padding: 10,
        backgroundColor: "#E9B440"
    },
    textos: {
        borderWidth: 7,
        borderColor: "purple",
        borderRadius: 15,
        backgroundColor: "#E9B440",
        width: "95%"
    },
    texto1: {
        borderWidth: 7,
        borderColor: "yellow",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    texto1_1: {
        borderWidth: 7,
        borderColor: "brown",
    },
    texto2: {
        borderWidth: 7,
        borderColor: "aquamarine",
    },
    texto3: {
        borderWidth: 7,
        borderColor: "gray",
    },
    texto4: {
        borderWidth: 7,
        borderColor: "orange",
    },
    texto5: {
        borderWidth: 7,
        borderColor: "blue",
    },
    texto6: {
        borderWidth: 7,
        borderColor: "violet",
    }
});