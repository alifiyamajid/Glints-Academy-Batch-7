import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';

//Screen
import SkillScreen from "./SkillScreen";
import ProjectSkillScreen from "./ProjectSkillScreen";
import TambahSkillScreen from "./TambahSkillScreen";
import { Icon } from 'native-base';






const Tab = createBottomTabNavigator();



function Route() {
    return (

        <Tab.Navigator
            initialRoute="SkillScreen"
            activeColor="#00d1ff"
            inactiveColor="#3e3639"
            style={{ backgroundColor: '#2b2b2b' }}
            barStyle={{ backgroundColor: '#0e0040', padding: 4 }}
        >
            <Tab.Screen
                name="SkillScreen"
                component={SkillScreen}
                options={{
                    tabBarLabel: 'Skill',
                    tabBarIcon: ({ color }) => (
                        <Icon type="FontAwesome" name='user-circle' color={color} size={23} />
                    )
                }}
            />
            <Tab.Screen
                name="ProjectSkillScreen"
                component={ProjectSkillScreen}
                options={{
                    tabBarLabel: 'Project',
                    tabBarIcon: ({ color }) => (
                        <Icon type="Ionicons" name='settings' color={color} size={23} />
                    )
                }}
            />
            <Tab.Screen
                name="TambahSkillScreen"
                component={TambahSkillScreen}
                options={{
                    tabBarLabel: 'Tambah',
                    tabBarIcon: ({ color }) => (
                        <Icon type="FontAwesome5" name='calendar-plus' color={color} size={23} />
                    )
                }}
            />
        </Tab.Navigator>

    )

};


export default Route;