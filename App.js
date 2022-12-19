import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Counter from './src/Counter';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
const App = (props) => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;

