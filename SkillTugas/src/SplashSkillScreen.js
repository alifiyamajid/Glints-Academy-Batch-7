import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { StackActions } from '@react-navigation/native';


const DEVICE = Dimensions.get('window');

export default function SplashScreen({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(StackActions.replace('Login'));
        }, 5000);
    });

    return (
        <View style={styles.container}>
            <Image source={require('../Assets/37364-the-travelers-walking-cycle-girl-goes.gif')} style={styles.gambar2} />

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fefefe',
    },
    // gambar: {
    //     alignSelf: 'center',
    //     height: "80%",
    //     width: "80%",
    //     marginBottom: 15,
    // },

    gambar2: {
        justifyContent: "center",
        alignItems: "center",
        height: "60%",
        width: "100%",
        marginBottom: -5,
    },

    text1: {

        fontSize: 50,
        fontFamily: 'Schoolbell',
        color: 'white',
    },
});