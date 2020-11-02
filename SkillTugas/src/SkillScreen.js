import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Card, CardItem, Body, Icon } from 'native-base';
// import Icon from 'react-native-vector-icons'

export default function SkillScreen({ navigation }) {
    return (
        <View style={{ flex: 1, }}>
            <View style={{ top: 6 }}>
                <Text style={{
                    borderBottomWidth: 4, color: "#000", borderColor: "#00D1ff",
                    fontSize: 25, width: 420, alignItems: "center", paddingHorizontal: 165,
                    color: "#0e0040",
                }}
                >SKILL</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20 }}>
                    <Text style={{ fontSize: 12, backgroundColor: "#00d1ff", top: 10, paddingHorizontal: 5, paddingVertical: 3, borderRadius: 15, color: "#0e0040" }}>Library/Frameworks</Text>
                    <Text style={{ fontSize: 12, backgroundColor: "#00d1ff", top: 10, paddingHorizontal: 5, paddingVertical: 3, borderRadius: 15, color: "#0e0040" }}>Bahasa Pemograman</Text>
                    <Text style={{ fontSize: 12, backgroundColor: "#00d1ff", top: 10, paddingHorizontal: 5, paddingVertical: 3, borderRadius: 15, color: "#0e0040" }}>Teknologi</Text>
                </View>
                <View>
                    <Card style={{ top: 40, borderRadius: 8, position: "absolute", left: 15, width: 380, }}>
                        <CardItem style={{ height: 100, borderRadius: 8, backgroundColor: "#9DF0FF" }}>
                            <Body>
                                <Icon type="Ionicons" name='logo-react' style={{ height: 30, color: "#0e0040" }} />
                                <Text style={{ left: 50, fontSize: 20, top: -40, fontWeight: "bold", color: "#0e0040" }}>
                                    React Native
                            </Text>
                                <Text style={{ top: -40, left: 50, color: "#00C8F4" }}>
                                    Frameworks/Library
                            </Text>
                                <Text style={{ left: 220, top: -50, fontSize: 45, color: "#fefefe" }}>
                                    50%
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </View>

                <View>
                    <Card style={{ top: 170, borderRadius: 8, position: "absolute", left: 15, width: 380 }}>
                        <CardItem style={{ height: 100, borderRadius: 8, backgroundColor: "#9DF0FF" }}>
                            <Body>
                                <Icon type="Ionicons" name='logo-javascript' style={{ height: 30, color: "#0e0040" }} />
                                <Text style={{ left: 50, fontSize: 20, top: -40, fontWeight: "bold", color: "#0e0040" }}>
                                    JavaScript
                            </Text>
                                <Text style={{ top: -40, left: 50, color: "#00C8F4" }}>
                                    Bahasa Pemograman
                            </Text>
                                <Text style={{ left: 220, top: -50, fontSize: 45, color: "#fefefe" }}>
                                    30%
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </View>

                <View>
                    <Card style={{ top: 300, borderRadius: 8, position: "absolute", left: 15, width: 380 }}>
                        <CardItem style={{ height: 100, borderRadius: 8, backgroundColor: "#9DF0FF" }}>
                            <Body>
                                <Icon type="AntDesign" name="github" style={{ height: 30, color: "#0e0040" }} />
                                <Text style={{ left: 50, fontSize: 20, top: -40, fontWeight: "bold", color: "#0e0040" }}>
                                    GitHub
                            </Text>
                                <Text style={{ top: -40, left: 50, color: "#00C8F4" }}>
                                    Teknologi
                            </Text>
                                <Text style={{ left: 220, top: -50, fontSize: 45, color: "#fefefe" }}>
                                    70%
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </View>

                <View>
                    <Card style={{ top: 430, borderRadius: 8, position: "absolute", left: 15, width: 380 }}>
                        <CardItem style={{ height: 100, borderRadius: 8, backgroundColor: "#9DF0FF" }}>
                            <Body>
                                <Icon type="AntDesign" name="gitlab" style={{ height: 30, color: "#0e0040" }} />
                                <Text style={{ left: 50, fontSize: 20, top: -40, fontWeight: "bold", color: "#0e0040" }}>
                                    Gitlab
                            </Text>
                                <Text style={{ top: -40, left: 50, color: "#00C8F4" }}>
                                    Teknologi
                            </Text>
                                <Text style={{ left: 220, top: -50, fontSize: 45, color: "#fefefe" }}>
                                    70%
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
