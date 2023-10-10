import React from "react";
import { Image, StyleSheet } from "react-native";

function Icone(){
    return (
        <Image
        source={require('../../../assets/hospital.jpg')}
        style={styles.logo} />
    )
}

const styles = StyleSheet.create ({
    logo: {
        width: 150,
        height: 150
    }
});

export default Icone;