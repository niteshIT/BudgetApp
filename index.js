/**
 * @format
 */

import {AppRegistry, _Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import store, {persistor} from './Screens/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Text} from 'react-native';
const AppRedux = () => (
  <Provider store={store}>
    <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
AppRegistry.registerComponent(appName, () => AppRedux);
