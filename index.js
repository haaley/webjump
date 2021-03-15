/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import createStore from './src/store';

const ReduxProvider = () => {
  return (
    <Provider store={createStore()}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ReduxProvider);
