import { clearAll } from '../../app/Utils/AsyncStorageHelper';
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {FontConstants} from '../Assets/FontConstants';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { processColorsInProps } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import {Colors} from '../Assets/Colors';
const styles = StyleSheet.create({
  basicView: {
    height: 60,
    width: 100,
    backgroundColor: '#fff',
    right: 0,
    top: 0,
    position: 'absolute',
    zIndex: 999,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 5,
    justifyContent: 'space-between',
  },
  secoendView: {
    borderBottomWidth: 1,
    height: 25,
    borderBottomColor: Colors.primary,
  },
  titleText: {color: '#000', fontFamily: FontConstants.Avenir600, fontSize: 14},
});
const ToolTip = ({navigation}:any) => {
    const onLogoutPress = async () => {
        await clearAll().then(resp => {
           navigation.reset({
                index: 0,
                routes: [{ name: 'LoginScreen', params: { } }],
              });
        });
      };
  return (
    <View
      style={styles.basicView}>
          <TouchableOpacity style={styles.secoendView} onPress={()=>{navigation.navigate('Settings')}}>
              <Text style={styles.titleText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secoendView} onPress={()=>{onLogoutPress()}}>
              <Text style={styles.titleText}>Log out</Text>
          </TouchableOpacity>
      </View>
  );
};
export default ToolTip;
