//@ts-check
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {Colors} from '../Assets/Colors';
import Assets from '../Assets';
import {FontConstants} from '../Assets/FontConstants';
interface modalData {
  title: string;
  description: string;
  showmodal: boolean;
  setTitle: (t: string) => void;
  setDescription: (d: string) => void;
  setShowmodal: (m: boolean) => void;
  addTask: () => void;
}

const ModalView: React.FC<modalData> = ({
  title,
  description,
  showmodal,
  setTitle,
  setDescription,
  setShowmodal,
  addTask,
}) => {
  const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      backgroundColor: 'rgba(217,217,217,0.7)',
      paddingHorizontal: 20,
      justifyContent: 'center',
    },
    secoendView: {
      width: '100%',
      minHeight: 400,
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
    },
    addTaskText: {
      fontSize: 24,
      fontFamily: FontConstants.Avenir700,
      color: '#000',
      alignSelf: 'center',
      marginTop: 10,
    },
    titleView: {flexDirection: 'row', width: '100%', marginTop: 20},
    levelText: {
      fontFamily: FontConstants.Avenir700,
      fontSize: 14,
      color: '#000',
      marginTop: 10,
    },
    inputView: {
      flex: 1,
      color: '#000000',
      fontSize: 16,
      fontFamily: FontConstants.Avenir600,
      paddingHorizontal: 20,
      borderBottomWidth: 0.5,
      borderColor: Colors.primary,
      borderRadius: 5,
    },
    buttonView: {
      backgroundColor: '#0178BD',
      height: 26,
      width: 100,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 30,
    },
    buttonText: {
      fontFamily: FontConstants.Avenir500,
      color: Colors.white,
      fontSize: 16,
    },
  });
  return (
    <Modal animationType="slide" transparent={true} visible={showmodal}>
      <View style={styles.mainView}>
        <View style={styles.secoendView}>
          <TouchableOpacity
            onPress={() => setShowmodal(false)}
            style={{alignSelf: 'flex-end'}}>
            <Image source={Assets.cross} />
          </TouchableOpacity>

          <Text style={styles.addTaskText}>Add Task</Text>
          <View style={styles.titleView}>
            <Text style={styles.levelText}>Title: </Text>
            <TextInput
              onChangeText={t => {
                setTitle(t);
              }}
              value={title}
              multiline={true}
              keyboardType={'default'}
              placeholderTextColor={'#818181'}
              placeholder={''}
              style={styles.inputView}
            />
          </View>
          <View style={{flexDirection: 'row', width: '100%', marginTop: 20}}>
            <Text style={styles.levelText}>Details: </Text>
            <TextInput
              onChangeText={t => {
                setDescription(t);
              }}
              value={description}
              multiline={true}
              keyboardType={'default'}
              placeholderTextColor={'#818181'}
              placeholder={''}
              style={styles.inputView}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              addTask();
            }}
            style={styles.buttonView}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalView;
