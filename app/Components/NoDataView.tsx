//@ts-check
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';
import {Colors} from '../Assets/Colors';
import Assets from '../Assets';
import {FontConstants} from '../Assets/FontConstants';
import LottieView from 'lottie-react-native';

interface props {
}


const NoDataView = () => {
    const styles = StyleSheet.create({

      });
  return (
  <View style={{alignItems:'center',justifyContent:'center',height:Dimensions.get('window').height*0.8,width:'100%'}}>
  <LottieView
         style={{
             marginLeft: 10,
             marginRight: 10,
             height:100,
             width:100,
             //backgroundColor: 'green',
             scaleX: 1.2,
             scaleY: 1.2
             // position: 'relative',
         }}
         source={require('../Assets/Images/lotti.json')}
         autoPlay={true}
         loop={true}
        // speed={1}
     />
     <Text>No data found</Text>
                 </View>
  )
};


export default NoDataView;
