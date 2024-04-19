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
import TaskCard from '../Components/TaskCard';
import SummaryCard from '../Components/SummaryCard';

interface Props {
  navigation: any;
}

const TaskScreen: FC<Props> = props => {
  const [selectedType, setselectedType] = useState('AllTask');
  const taskData = [
    {
      title: 'Document Signing',
      id: '1',
      des: 'Document signing with Jhon Doe',
      status: 'Completed',
    },
    {
      title: 'Document Signing',
      id: '2',
      des: 'Document signing with Jhon Doe',
      status: 'Due',
    },
  ];
  return (
    <View style={styles.parentView}>
      <View style={styles.summaryDiv}>
        <SummaryCard
          color={'#86279B'}
          title={'All Task'}
          value={'10'}
          colorbackground={'#F4EBF6'}
        />
        <SummaryCard
          color={'#009589'}
          title={'Comppleted'}
          value={'5'}
          colorbackground={'#EAF6F5'}
        />
        <SummaryCard
          color={'#FF0000'}
          title={'Due'}
          value={'5'}
          colorbackground={'rgba(255, 232, 232, 1)'}
        />
      </View>
      <TouchableOpacity style={styles.addTaskView}>
        <Text style={styles.addTaskText}>Add Task</Text>
      </TouchableOpacity>

      <ScrollView
        style={{width: '100%', marginTop: 20}}
        showsVerticalScrollIndicator={false}>
        <View style={{}}>
          {taskData.map((item, index) => {
            return (
              <TaskCard
                title={item.title}
                description={item.des}
                status={item.status}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  summaryDiv: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  addTaskView: {
    width: '100%',
    height: 45,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9EAEF',
  },
  addTaskText: {
    color: 'rgba(10, 17, 80, 1)',
    fontFamily: FontConstants.Avenir600,
    fontSize: 20,
  },
});

export default TaskScreen;
