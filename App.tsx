import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackRoutes from './app/Navigation/Routes';

function App() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}

export default App;
