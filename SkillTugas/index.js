
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import SplashSkillScreen from './src/SplashSkillScreen'
import LogInSkillScreen from './src/LogInSkillScreen'
import RegisterSkillScreen from './src/RegisterSkillScreen'
import SkillScreen from './src/SkillScreen'
import ProfileSkillScreen from './src/ProfileSkillScreen'
import Stack from './src/Stack';

AppRegistry.registerComponent(appName, () => Stack);
