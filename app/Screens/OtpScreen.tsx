import React, {FC, useState, useRef, useCallback, useEffect} from 'react';
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
import {FontConstants} from '../Assets/FontConstants';

interface Props {
  navigation: any;
  route:any
}

const OtpScreen: FC<Props> = props => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isResendShow, setisResendShow] = useState(true);
  const [fromForgetPass, setfromForgetPass] = useState(props.route.params.fromForgetPass);
  const [timer, setTimer] = useState(59);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const handleOtpChange = (index:number, text:string) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };
  const decrementTimer = useCallback(() => {
    setTimer(oldTimer => oldTimer - 1);
  }, []);
  useEffect(() => {
    if (isResendShow) {
      if (timer <= 0) {
        return;
      }
      const timeoutFunction = setInterval(decrementTimer, 1000);
      return () => clearInterval(timeoutFunction);
    }
  }, [decrementTimer, timer, isResendShow]);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
      <ScrollView contentContainerStyle={styles.parentViewContainer}>
        <View style={{flex: 2}}>
          <Text style={styles.loginText}>Otp Varification</Text>
          <Text style={styles.secoendaryLoginText}>
            We have sent the verification code to your mobile number
          </Text>
        </View>
        <View style={styles.container}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={inputRefs[index]}
              style={styles.input}
              value={digit}
              onChangeText={text => handleOtpChange(index, text)}
              keyboardType="numeric"
              maxLength={1}
            />
          ))}
        </View>
        <View style={{flex: 4}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
              display: timer == 0 ? 'none' : 'flex',
            }}>
            <Text style={{color: '#969AA8', textAlign: 'center'}}>
              Code expires in :{' '}
              <Text style={{color: Colors.primary}}> 00 : {timer}</Text>
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('SignUpScreen')}
            style={styles.haveAccountView}>
            <Text style={styles.haveAccountText}>
              Didn’t receive the OTP?{' '}
              <Text style={{color: '#0178BD'}}>Resend Code</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate(fromForgetPass ? 'NewPassScreen' : 'Home')
            }
            style={[styles.buttonView, {marginTop: 20}]}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  parentViewContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 18,
    textAlign: 'center',
    width: 40,
  },
  container: {
    flex: 2,
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
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
  underlineStyleBase: {
    width: 45,
    height: 45,
    borderRadius: 8,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#8A94A4',
    color: '#000',
  },

  underlineStyleHighLighted: {
    borderColor: '#1E417D',
    borderWidth: 1,
  },
  haveAccountView: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  haveAccountText: {
    fontSize: 14,
    color: '#828282',
    fontFamily: FontConstants.Avenir400,
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
});

export default OtpScreen;
