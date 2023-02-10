import React from "react";
import { View, Text, StyleSheet , TouchableOpacity, Image } from "react-native";

export default function Intro({navigation}){
    return(
        <View style={styles.container}>
            <Image
                source={require('../../../assets/logo-header.png')}
                style={styles.img}
            />
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.txt}>Receitas</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        height: "50%"
    },
    btn: {
        backgroundColor: "#E9B440",
        borderRadius: 15,
        height: 60,
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        borderColor: "#B87333"
    },
    txt: {
        fontSize: 30,
        color: "#FFF",
        textAlign: "center"
    }
});