import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import * as ScreenOrientation from 'expo-screen-orientation';

export default function Receita({route}) {

    const words = route.params.ingredientes.split(',');

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
                        <Text style={styles.text}>Tempo de Preparo</Text>
                        <Text style={styles.text}>{route.params.tempo_preparo}</Text>
                    </View>
                    <View style={styles.texto1_1}>
                        <Text style={styles.text}>Rendimento</Text>
                        <Text style={styles.text}>{route.params.rendimento}</Text>
                    </View>
                </View>
                <View style={styles.texto2}>
                    <Text style={styles.tit}>Ingredientes</Text>
                </View>
                <View style={styles.texto3}>
                    <FlatList 
                        data={words}
                        renderItem={(item, index) => {
                            return(
                                <Text style={styles.text}>{item}</Text>
                            )
                        }}
                    />
                </View>
                <View style={styles.texto4}>
                    <Text style={styles.tit}>Modo de Preparo</Text>
                </View>
                <View style={styles.texto5}>
                    <Text style={styles.text}>{route.params.modo_preparo}</Text>
                </View>
                <View style={styles.texto6}>
                    <Text style={styles.text}>Autor: {route.params.autor}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
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
        fontSize: 30
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
        padding: 10,
        justifyContent: "space-around"
    },
    tit: {
        color: "#FFF",
        fontSize: 25,
        borderBottomWidth: 3,
        borderBottomColor: "black",
        backgroundColor: "gray"
    },
    texto1: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderBottomWidth: 3,
        borderBottomColor: "black"
    },
    texto2: {
        justifyContent: "center",
        alignItems: "center"
    },
    texto3: {
        justifyContent: "center",
        alignItems: "center"
    },
    texto4: {
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "#FFF",
        fontSize: 20
    }
});