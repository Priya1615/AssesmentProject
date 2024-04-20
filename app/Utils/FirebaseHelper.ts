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
    return {err: error};
  }
};
export const handleLogin = async (email: string, password: string) => {
  try {
    return await auth().signInWithEmailAndPassword(email, password);
    // Handle successful login
  } catch (err) {
    return {err: err};
  }
};
export const addTodo = async (
  uid: string,
  todoText: string,
  description: string,
  status: string,
) => {
  if (todoText.trim() !== '') {
    try {
      await firestore()
        .collection('todos')
        .doc(uid)
        .collection('items')
        .add({title: todoText, description: description, stat: status})
        .then(response => {
          return;
        });
    } catch (error) {
      console.error('Error adding todo: ', error);
    }
  }
};
export const loadTodos = async (uid: string) => {
  if (uid) {
    try {
      const querySnapshot = await firestore()
        .collection('todos')
        .doc(uid)
        .collection('items')
        .get();
      const todosList: any = [];
      querySnapshot.forEach(doc => {
        todosList.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      return todosList;
    } catch (error) {
      console.error('Error loading todos: ', error);
    }
  }
};
export const updateTodo = async (uid: string, id: string, stat: string) => {
  try {
    await firestore()
      .collection('todos')
      .doc(uid)
      .collection('items')
      .doc(id)
      .update({stat: stat});
  } catch (error) {
    console.error('Error updating todo: ', error);
  }
};
export const deleteTodo = async (uid: string, id: string) => {
  try {
    await firestore()
      .collection('todos')
      .doc(uid)
      .collection('items')
      .doc(id)
      .delete();
  } catch (error) {
    console.error('Error deleting todo: ', error);
  }
};
