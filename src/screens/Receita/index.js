import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import * as ScreenOrientation from 'expo-screen-orientation';

import { styles } from "./styles";

export default function Receita({route}) {

    const words = route.params.ingredientes.split(', ');

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
                <ScrollView>
                    <View style={styles.texto1}>
                        <View>
                            <Text style={styles.det}>Tempo de Preparo</Text>
                            <Text style={styles.det2}>{route.params.tempo_preparo}</Text>
                        </View>
                        <View>
                            <Text style={styles.det}>Rendimento</Text>
                            <Text style={styles.det2}>{route.params.rendimento}</Text>
                        </View>
                    </View>
                    <View style={styles.texto2}>
                        <Text style={styles.tit}>Ingredientes</Text>
                    </View>
                    <View style={styles.texto2}>
                        <FlatList
                            data={words}
                            renderItem={({item}) => {
                                return(
                                    <Text style={styles.text}>- {item}</Text>
                                )
                            }}
                        />
                    </View>
                    <View style={styles.texto2}>
                        <Text style={styles.tit}>Modo de Preparo</Text>
                    </View>
                    <View style={styles.texto2}>
                        <Text style={styles.text}>  {route.params.modo_preparo}</Text>
                    </View>
                    <View>
                        <Text style={styles.det}>Autor: {route.params.autor}</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}