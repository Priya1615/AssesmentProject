import React, {FC, useEffect} from 'react';
import {Image, StyleSheet, View, ImageBackground, Text} from 'react-native';
import {FontConstants} from '../Assets/FontConstants';
import {getData} from '../../app/Utils/AsyncStorageHelper';
interface Props {
  navigation: any;
}

const SplashScreen: FC<Props> = props => {
  useEffect(() => {
    const timer = setTimeout(() => {
      checkUser();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const checkUser = async () => {
    const userCred = await getData('user');
    if (userCred && userCred.uid) {
      //props.navigation.navigate('Home',{uid:'fff'});
      props.navigation.navigate('Home', {
        screen: 'HomeScreen',
        params: {uid: userCred.uid},
      });
    } else {
      props.navigation.navigate('LoginScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ToDo Master</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#044373',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: '#fff', fontFamily: FontConstants.Avenir600, fontSize: 20},
});

export default SplashScreen;
