import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Header() {
    return(
        <View style={{marginLeft: 15}}>
            <Image
                source={require('../../../assets/logo-header.png')}
                style={styles.img}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 150,
        height: 150
    }
})