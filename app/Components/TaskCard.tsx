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

export interface TaskData {
  title: string;
  description: string;
  stat: string;
  id: string;
  pageFrom:string,
  completePress?: (uis: string) => void;
  deletePress?: (uis: string) => void;
}
const styles = StyleSheet.create({
  basicView: {
    width: '100%',
    minHeight: 75,
    borderRadius: 5,
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 20,
    elevation: 9,
    borderWidth: 0.5,
    borderColor: '#0178BD',
  },
  secoendView: {height: '100%', width: '80%', paddingRight: 5},
  titleText: {
    fontSize: 14,
    fontFamily: FontConstants.Avenir600,
    color: '#000000',
  },
  descriptionText: {
    fontSize: 14,
    fontFamily: FontConstants.Avenir400,
    color: '#000000',
  },
  statusText: {
    fontSize: 12,
    fontFamily: FontConstants.Avenir600,
    color: '#000000',
  },
  completedDiv: {
    width: '100%',
    height: 25,
    borderRadius: 5,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteDiv: {height: '100%', width: '20%',},
  completedTask: {
    fontSize: 12,
    fontFamily: FontConstants.Avenir400,
    color: Colors.white,
  },
  deleteButton: {bottom: 0, right: 0, position: 'absolute'},
});

const TaskCard = ({
  title,
  description,
  stat,
  pageFrom,
  completePress,
  deletePress,
  id,
}: TaskData) => {
  return (
    <View style={styles.basicView}>
      <View style={styles.secoendView}>
        <Text numberOfLines={1} style={styles.titleText}>
          {title}
        </Text>
        <Text numberOfLines={2} style={styles.descriptionText}>
          {description}
        </Text>
        <Text numberOfLines={2} style={styles.statusText}>
          Status:{' '}
          <Text style={{color: stat == 'Due' ? 'red' : '#0D6B11'}}>
            {stat}
          </Text>
        </Text>
      </View>
      <View style={styles.deleteDiv}>
        <TouchableOpacity
          onPress={() => (completePress ? completePress(id) : null)}
          style={[styles.completedDiv,{display:pageFrom == "Home"?"none":stat=='Due'?'flex':'none'}]}>
          <Text style={styles.completedTask}>Complete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => (deletePress ? deletePress(id) : null)}
          style={[styles.deleteButton,{display:pageFrom == "Home"?"none":'flex'}]}>
          <Image style={{tintColor: 'red'}} source={Assets.delete} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskCard;
