import React from 'react';
import 'react-native-gesture-handler';
import Routes from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
};

export default App;
