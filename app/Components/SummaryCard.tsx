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
} from 'react-native';
import {Colors} from '../Assets/Colors';
import Assets from '../Assets';
import {FontConstants} from '../Assets/FontConstants';

interface props {
  color: string;
  title: string;
  value: string;
  colorbackground:string
}


const SummaryCard = ({color, title, value,colorbackground}: props) => {
    const styles = StyleSheet.create({
        cardView: {
          height: 60,
          minWidth: 100,
          marginRight: 10,
          marginBottom: 10,
          backgroundColor: colorbackground,
          borderRadius: 10,
          justifyContent:'center',
          alignItems:"center",
          paddingHorizontal:8
        },
        basicText:{fontFamily:FontConstants.Avenir600,fontSize:16,color:color}
      });
  return (<TouchableOpacity style={styles.cardView}>
      <Text style={styles.basicText}>{title +'('+value+')'}</Text>

  </TouchableOpacity>
  )
};


export default SummaryCard;
