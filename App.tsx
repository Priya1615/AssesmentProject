import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackRoutes from './app/Navigation/Routes';
import {firebase} from '@react-native-firebase/auth';
import {getApp} from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {firebaseConfig} from './app/Utils/FirebaseHelper';

function App() {
  React.useEffect(() => {
    if (!getApp()) {
      firebase.initializeApp(firebaseConfig);
    }
    //
  }, []);
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}

export default App;
