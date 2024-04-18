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
} from 'react-native';
import {Colors} from '../Assets/Colors';
import Assets from '../Assets';
import {FontConstants} from '../Assets/FontConstants';

interface Props {
  navigation: any;
}

const LoginScreen: FC<Props> = props => {
  const [phoneNumber, setphoneNumber] = useState('');
  const [password, setpassword] = useState('');
  const [secureText, setsecureText] = useState(true);
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
          <Text style={styles.inputlevel}>Phone Number</Text>
          <View style={[styles.inputContainer, {}]}>
            <TextInput
           
              placeholder={'Enter your registered number'}
              placeholderTextColor={'#6E6E6E'}
              returnKeyType="next"
              value={phoneNumber}
              onChangeText={value => setphoneNumber(value)}
              keyboardType={'phone-pad'}
            />
          </View>
          <Text style={[styles.inputlevel, {marginTop: 25}]}>Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={{width:'90%'}}
              placeholder={'Enter your password'}
              placeholderTextColor={'#6E6E6E'}
              returnKeyType="done"
              value={password}
              secureTextEntry={secureText}
              onChangeText={value => setpassword(value)}
            />
            <TouchableOpacity  onPress={() => setsecureText(!secureText)}>
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
          <TouchableOpacity onPress={()=>props.navigation.navigate("ForgetPassScreen")} style={styles.forgetPasswordDiv}>
            <Text style={styles.forgetPassText}>ForgetPassword?</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 2}}>
          <TouchableOpacity onPress={()=>props.navigation.navigate("Home")} style={styles.buttonView}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>props.navigation.navigate("SignUpScreen")} style={styles.haveAccountView}>
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
