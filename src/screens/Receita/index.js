import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, ActivityIndicator } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";

import { styles } from "./styles";

export default function Receita({route}) {

    const words = route.params.ingredientes.split(', ');
    const [videoReady, setVideoReady] = useState();

    function carregado() {
        setVideoReady(true);
    }

    return(
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Text style={styles.textTitulo}>{route.params.nome}</Text>
            </View>
            <View style={styles.video}>
                {!videoReady && <ActivityIndicator style={styles.load} size="large" />}
                <YoutubeIframe
                    videoId={route.params.video}
                    height={300}
                    onReady={carregado}
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
                        {
                            words.map((item, index) => {
                                return <Text key={index} style={styles.text1}>- {item}</Text>;
                            })
                        }
                    </View>
                    <View style={styles.texto2}>
                        <Text style={styles.tit}>Modo de Preparo</Text>
                    </View>
                    <View style={styles.texto2}>
                        <Text style={styles.text2}>  {route.params.modo_preparo}</Text>
                    </View>
                    <View>
                        <Text style={styles.det}>Autor: {route.params.autor}</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}