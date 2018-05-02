import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import { AppRegistry } from 'react-native';
import App from './App';

//import { useStrict } from 'mobx';
//useStrict(true);

AppRegistry.registerComponent('nawarrow', () => App);
//react-native-web:
//AppRegistry.runApplication('nawarrow', { rootTag: document.getElementById('react-root') });
