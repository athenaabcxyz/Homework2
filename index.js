/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import firstComponent from './components/firstComponent';

AppRegistry.registerComponent(appName,() => firstComponent);
