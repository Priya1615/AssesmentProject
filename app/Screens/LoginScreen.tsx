import React, {FC, useState} from 'react';
import {
  View,
  Text,
  Button,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicatorBase,
  ActivityIndicator,
  Alert
} from 'react-native';
import {Colors} from '../Assets/Colors';
import Assets from '../Assets';
import {FontConstants} from '../Assets/FontConstants';
import {handleLogin} from '../../app/Utils/FirebaseHelper';
import {storeData} from '../../app/Utils/AsyncStorageHelper';

interface Props {
  navigation: any;
}

const LoginScreen: FC<Props> = props => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [secureText, setsecureText] = useState(true);
  const [loading, setLoading] = useState(false);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const loginPress = async () => {
    setLoading(true);
    const loginResponseFirebase: any = await handleLogin(email, password);
    if (loginResponseFirebase.user) {
      let userCred = {
        email: loginResponseFirebase.user.email,
        uid: loginResponseFirebase.user.uid,
        displayName: loginResponseFirebase.user.displayName,
      };
      storeData('user', userCred);
      props.navigation.navigate('Home', {
        screen: 'HomeScreen',
        params: {uid: userCred.uid},
      });
    } else if (loginResponseFirebase.err) {
      alert(loginResponseFirebase.err);
    }
    setLoading(false);
  };
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
      <ScrollView contentContainerStyle={styles.parentViewContainer}>
        <View style={{flex: 3}}>
          <Text style={styles.loginText}>Login</Text>
          <Text style={styles.secoendaryLoginText}>Login to your account</Text>
        </View>
        <View style={{flex: 6}}>
          <Text style={styles.inputlevel}>Email</Text>
          <View style={[styles.inputContainer, {}]}>
            <TextInput
              placeholder={'Enter your registered email'}
              placeholderTextColor={'#6E6E6E'}
              returnKeyType="next"
              value={email}
              onChangeText={value => setEmail(value)}
              keyboardType={'phone-pad'}
            />
          </View>
          <Text style={[styles.inputlevel, {marginTop: 25}]}>Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={{width: '90%'}}
              placeholder={'Enter your password'}
              placeholderTextColor={'#6E6E6E'}
              returnKeyType="done"
              value={password}
              secureTextEntry={secureText}
              onChangeText={value => setpassword(value)}
            />
            <TouchableOpacity onPress={() => setsecureText(!secureText)}>
              <Image
                source={secureText ? Assets.img_hideeye : Assets.Eye}
                style={{
                  tintColor: '#999999',
                  marginRight: secureText ? 0 : 5,
                  alignSelf: 'flex-end',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 2}}>
          <TouchableOpacity
           onPress={() => {
            if (email === "" || password === "") {
              Alert.alert("Please fill up all the information.");
            } else if (!emailPattern.test(email)) {
              Alert.alert("Please provide a valid email.");
            } else {
              loginPress();
            }
          }}
            style={styles.buttonView}>
            {loading ? (
              <ActivityIndicator size={'small'} color={'#FFF'} />
            ) : (
              <Text style={styles.buttonText}>Login</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('SignUpScreen')}
            style={styles.haveAccountView}>
            <Text style={styles.haveAccountText}>
              Don’t have an account?{' '}
              <Text style={{color: '#0178BD'}}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  parentViewContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  loginText: {
    fontSize: 24,
    marginTop: 22,
    textAlign: 'center',
    fontFamily: FontConstants.Avenir700,
    color: '#0178BD',
  },
  secoendaryLoginText: {
    color: '#6E6E6E',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 25,
    fontFamily: FontConstants.Avenir600,
  },
  inputlevel: {
    color: '#000',
    fontSize: 16,
    fontFamily: FontConstants.Avenir500,
  },
  forgetPasswordDiv: {marginTop: 10, alignSelf: 'flex-end'},
  forgetPassText: {
    fontSize: 14,
    color: '#0178BD',
    fontFamily: FontConstants.Avenir500,
  },
  buttonView: {
    height: 50,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#0178BD',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 20,
    fontFamily: FontConstants.Avenir600,
  },
  haveAccountView: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  inputContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    borderWidth: 1,
    borderColor: 'rgba(79, 79, 79, 0.3)',
    borderRadius: 5,
  },

  haveAccountText: {
    fontSize: 14,
    color: '#828282',
    fontFamily: FontConstants.Avenir400,
  },
});

export default LoginScreen;
