import React, {FC, useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Colors} from '../Assets/Colors';
import Assets from '../Assets';
import {FontConstants} from '../Assets/FontConstants';
import { getData } from '../../app/Utils/AsyncStorageHelper';

interface Props {
  navigation: any;
}
export interface User{
  displayName:string,
  email:string,
  uid:string
}

const SettingScreen: FC<Props> = props => {
  const [phoneNumber, setphoneNumber] = useState('');
  const [name, setName] = useState('');
  const [password, setpassword] = useState('');
  const [secureText, setsecureText] = useState(true);
  const [user, setUser] = useState<User>({ displayName: '', email: '', uid: '' });

  const onSignUpPress=()=>{
    props.navigation.navigate("Home")
 
   };
   const getUser=async()=>{
    const user:User= await getData('user');
    console.log('user get',user)
    setUser(user)
   }
   useEffect(()=>{
     getUser()
   },[])
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
      <ScrollView contentContainerStyle={styles.parentViewContainer}>
        <View style={{flex: 3}}>
          <View style={{backgroundColor:'red',height:100,width:100,borderRadius:50,alignSelf:"center"}}>

          </View>
          <Text style={styles.secoendaryLoginText}>{user.displayName?user.displayName:null}</Text>
        </View>
        <View style={{flex: 6}}>
          <Text style={styles.inputlevel}>Email</Text>
          <View style={[styles.inputContainer, {marginBottom:12}]}>
            <Text style={{fontFamily:FontConstants.Avenir500,fontSize:16}}>{user.email?user.email:''}</Text>
          </View>
          <Text style={[styles.inputlevel]}>Name</Text>
          <View style={[styles.inputContainer,{marginBottom:12}]}>
 
            <Text style={{fontFamily:FontConstants.Avenir500,fontSize:16}}>{user.displayName?user.displayName:''}</Text>
         
            
          </View>
          
        </View>
        <View style={{flex: 2}}>
          <TouchableOpacity onPress={()=>onSignUpPress()} style={styles.buttonView}>
            <Text style={styles.buttonText}>Logout</Text>
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
    marginTop: 15,
    fontFamily: FontConstants.Avenir600,
  },
  inputlevel: {
    color: '#000',
    fontSize: 16,
    fontFamily: FontConstants.Avenir500,
  },
  forgetPasswordDiv: { alignSelf: 'flex-end'},
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
    borderBottomWidth: 1,
    borderColor: 'rgba(79, 79, 79, 0.3)',
    borderRadius: 5,
  },

  haveAccountText: {
    fontSize: 14,
    color: '#828282',
    fontFamily: FontConstants.Avenir400,
  },
});

export default SettingScreen;
