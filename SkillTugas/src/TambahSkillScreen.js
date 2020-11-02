import { Button } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function TambahSkillScreen({ navigation }) {
    return (
        <View style={{ alignItems: "center", justifyContent: "center", top: 200 }}>
            <Text style={{ fontWeight: "bold", fontSize: 18, }}>Halaman Tambah</Text>
            <Button onPress={() => navigation.navigate('ProfileSkillScreen')} style={{ borderRadius: 4, paddingHorizontal: 20, backgroundColor: "#0e0064", left: 150, top: 10 }}>
                <Text style={{ color: "#fefefe", fontSize: 15, fontWeight: "bold" }}> Ke Profile </Text>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({})
