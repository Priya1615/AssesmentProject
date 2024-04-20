import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/auth';
export const firebaseConfig = {
  apiKey: 'AIzaSyAZjsbhE0bQxRsIqXPu9LgWPGJ0pLUL-tA',
  authDomain: 'assesmentproject-eea4b.firebaseapp.com',
  projectId: 'assesmentproject-eea4b',
  storageBucket: 'assesmentproject-eea4b.appspot.com',
  messagingSenderId: '1079612443507',
  appId: '1:1079612443507:android:a2e94f7f59e59a202c1306',
  databaseURL:
    'https://assesmentproject-eea4b-default-rtdb.asia-southeast1.firebasedatabase.app/',
};
export const handleSignUp = async (
  name: string,
  email: string,
  password: string,
) => {
  try {
    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    await userCredential.user.updateProfile({
      displayName: name,
    });
    return userCredential;
  } catch (error) {
    console.log(error);
    return {err: error};
  }
};
export const handleLogin = async (email: string, password: string) => {
  try {
    return await auth().signInWithEmailAndPassword(email, password);
    // Handle successful login
  } catch (err) {
    console.log(err);
    return {err: err};
  }
};

