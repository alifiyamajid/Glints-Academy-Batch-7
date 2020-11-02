import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//Screen
import LoginSkillScreen from "./LogInSkillScreen";
import RegisterSkillScreen from "./RegisterSkillScreen";
import Route from './Route';
import SplasSkillhScreen from './SplashSkillScreen'
import ProfileSkillScreen from './ProfileSkillScreen'


const Stack = createStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="SplashScreen" component={SplasSkillhScreen} />
                <Stack.Screen name="Login" component={LoginSkillScreen} />
                <Stack.Screen name="Register" component={RegisterSkillScreen} />
                <Stack.Screen name="Route" component={Route} />
                <Stack.Screen name="ProfileSkillScreen" component={ProfileSkillScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
