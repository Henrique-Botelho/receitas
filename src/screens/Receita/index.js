import React from "react";
import { View, Text, StyleSheet } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import * as ScreenOrientation from 'expo-screen-orientation';

export default function Receita({route}) {
    return(
        <View style={styles.container}>
            <View>
                <Text>{route.params.nome}</Text>
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
                <Text>Tempo de Preparo: {route.params.tempo_preparo}</Text>
                <Text>Rendimento: {route.params.rendimento}</Text>
                <Text>Ingredientes: {route.params.ingredientes}</Text>
                <Text>Modo de Preparo: {route.params.modo_preparo}</Text>
                <Text>Autor: {route.params.autor}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 7
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

    }
});