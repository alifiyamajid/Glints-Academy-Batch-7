import { Button, Form, Item, Input, Label } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default function LogInSkillScreen({ navigation }) {
    return (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
            <View>
                <Text style={{ top: 50, fontSize: 20, color: "#0E0040", fontWeight: "bold" }}>Register</Text>
            </View>
            <View style={{ position: "absolute", top: 130, }}>
                <Form>

                    <Label style={{ fontSize: 15, top: 15 }}>Username</Label>
                    <Input style={{
                        height: 30, top: 15, color: '#2b2b2b', borderWidth: 1, borderRadius: 4,
                        width: 300, paddingHorizontal: 20, paddingVertical: 5, color: "#2b2b2b",

                    }} />


                    <Label style={{ fontSize: 15, top: 15 }}>Email</Label>
                    <Input style={{
                        height: 30, top: 15, color: '#2b2b2b', borderWidth: 1, borderRadius: 4,
                        width: 300, paddingHorizontal: 20, paddingVertical: 5, color: "#2b2b2b"
                    }} />


                    <Label style={{ fontSize: 15, top: 15 }}>Password</Label>
                    <Input style={{
                        height: 30, top: 15, color: '#2b2b2b', borderWidth: 1, borderRadius: 4,
                        width: 300, paddingHorizontal: 20, paddingVertical: 5, color: "#2b2b2b"
                    }} />


                    <Label style={{ fontSize: 15, top: 15 }}>Ulangi Password</Label>
                    <Input style={{
                        height: 30, top: 20, color: '#2b2b2b', borderWidth: 1, borderRadius: 4,
                        width: 300, paddingHorizontal: 20, paddingVertical: 5, color: "#2b2b2b"
                    }} />

                </Form>
            </View >
            <Text style={{ color: "#00D1FF", fontSize: 18, top: 450 }}>atau</Text>
            <View style={{ top: 350, }}>
                <Button onPress={() => navigation.navigate('Route')} style={{
                    backgroundColor: "#0E0064", marginTop: 30, marginBottom: 15,
                    borderRadius: 18, height: 40
                }}><Text style={{ color: "#fefefe", paddingHorizontal: 40 }} > Daftar ?</Text></Button>
                <Button onPress={() => navigation.navigate('Login')} style={{
                    backgroundColor: "#00D1FF", marginTop: 30, marginBottom: 15,
                    borderRadius: 18, height: 40
                }}><Text style={{ color: "#fefefe", paddingHorizontal: 40 }}> Masuk </Text></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
