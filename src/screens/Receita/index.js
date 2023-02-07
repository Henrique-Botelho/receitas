import React from "react";
import { View, Text } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import * as ScreenOrientation from 'expo-screen-orientation';

export default function Receita({route}) {
    return(
        <View>
            <Text>Autor: {route.params.autor}</Text>
            <Text>Tipo: {route.params.tipo}</Text>
            <Text>Nome: {route.params.nome}</Text>
            <Text>Tempo de Preparo: {route.params.tempo_preparo}</Text>
            <Text>Rendimento: {route.params.rendimento}</Text>
            <Text>Ingredientes: {route.params.ingredientes}</Text>
            <Text>Modo de Preparo: {route.params.modo_preparo}</Text>

            <View>
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
                />
            </View>
        </View>
    );
}