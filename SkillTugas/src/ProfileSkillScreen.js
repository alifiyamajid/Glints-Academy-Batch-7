
import { Icon } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function ProfileSkillScreen() {
    return (
        <View>
            <View style={{ alignItems: "center", justifyContent: "center", top: 30 }}>
                <Text style={{ top: -10, fontWeight: "bold", fontSize: 20, color: "#0e0040" }}>PROFILE</Text>
                <Image style={{ borderRadius: 300, width: 200, borderColor: "#0e0040", borderWidth: 1 }} source={require('../Assets/pp.png')} />
                <Text style={{ color: "#0e0040", fontWeight: "bold", fontSize: 18 }}>Alif Hanamifiya Majid</Text>
                <Text style={{ color: "#00d1ff" }}>React Native Developer</Text>
            </View>

            <View style={{
                top: 50, flexDirection: "row", justifyContent: "space-between",
                backgroundColor: "#e0e0e0", height: 150, marginHorizontal: 40, borderRadius: 8,
            }}>
                <Text style={{
                    top: 10, borderBottomWidth: 1, position: "absolute", alignItems: "center",
                    justifyContent: "center", width: 300, marginHorizontal: 15, borderColor: "#0e0040", color: "#0e0040"
                }}> Portofolio</Text>
                <Icon style={{ top: 60, marginHorizontal: 50, color: "#00d1ff" }} type="FontAwesome" name="gitlab" />
                <Text style={{ color: "#0e0040", top: 100, left: -110 }}>@alifiyamajid</Text>
                <Icon style={{ top: 60, marginHorizontal: 50, color: "#00d1ff" }} type="FontAwesome" name="github" />
                <Text style={{ color: "#0e0040", top: 100, left: -110 }}>@alifiyamajid</Text>

            </View>

            <View style={{ top: 70, backgroundColor: "#e0e0e0", height: 150, marginHorizontal: 40, borderRadius: 8 }}>
                <Text style={{ borderBottomWidth: 2, borderTopWidth: 2, position: "absolute", top: 10, width: 300, marginHorizontal: 15, borderColor: "#0e0040", color: "#0e0040" }}>Hubungi Saya</Text>
                <View style={{ top: 30, }}>
                    <View style={{ flexDirection: "row" }}>
                        <Icon style={{ marginTop: 10, marginHorizontal: 15, color: "#00d1ff" }} type="MaterialIcons" name="email" />
                        <Text style={{ color: "#0e0040", left: -5, top: 12 }}>@alifhanamifiya96@gmail.com</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Icon style={{ marginTop: 10, marginHorizontal: 15, color: "#00d1ff" }} type="FontAwesome" name="twitter" />
                        <Text style={{ color: "#0e0040", left: -5, top: 12 }}>@alifhanamifiyam</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Icon style={{ marginTop: 10, marginHorizontal: 15, color: "#00d1ff" }} type="FontAwesome" name="instagram" />
                        <Text style={{ color: "#0e0040", left: -5, top: 12 }}>@alifiya_majid</Text>
                    </View>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({})
