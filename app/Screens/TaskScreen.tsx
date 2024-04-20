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
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Colors} from '../Assets/Colors';
import Assets from '../Assets';
import {FontConstants} from '../Assets/FontConstants';
import TaskCard, {TaskData} from '../Components/TaskCard';
import SummaryCard from '../Components/SummaryCard';
import {
  addTodo,
  deleteTodo,
  loadTodos,
  updateTodo,
} from '../../app/Utils/FirebaseHelper';
import {useFocusEffect} from '@react-navigation/native';
import {User} from './SettingScreen';
import {getData} from '../../app/Utils/AsyncStorageHelper';
import ModalView from '../Components/ModalView';

interface Props {
  navigation: any;
}

const TaskScreen: FC<Props> = props => {
  const [selectedType, setselectedType] = useState('all');
  const [uid, setUid] = useState('');
  const [taskData, setTaskData] = useState<TaskData[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showmodal, setShowmodal] = useState(false);
  const previewData =
    selectedType == 'all'
      ? taskData
      : selectedType == 'due'
      ? taskData.filter(item => item.stat == 'Due')
      : selectedType == 'complete'
      ? taskData.filter(item => item.stat == 'Complete')
      : [];
  useEffect(() => {
    getUser();
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      loadAllToDo();
    }, [uid]),
  );
  const getUser = async () => {
    const user: User = await getData('user');
    setUid(user.uid);
  };

  const loadAllToDo = async () => {
    const todoList: TaskData[] = await loadTodos(uid);
    setTaskData(todoList);
  };
  const onComplete = async (id: string) => {
    await updateTodo(uid, id, 'Complete');
    loadAllToDo();
  };
  const onDelete = async (id: string) => {
    await deleteTodo(uid, id);
    loadAllToDo();
  };
  const addToDo = async () => {
    await addTodo(uid, title, description, 'Due');
    loadAllToDo();
    setShowmodal(false);
    setTitle('');
    setDescription('');
  };
  return (
    <View style={styles.parentView}>
      <View style={styles.summaryDiv}>
        <ModalView
          title={title}
          showmodal={showmodal}
          description={description}
          setTitle={(t: string) => setTitle(t)}
          setDescription={(t: string) => {
            setDescription(t);
          }}
          addTask={() => {
            addToDo();
          }}
          setShowmodal={(b: boolean) => setShowmodal(b)}
        />
        <SummaryCard
          color={'#86279B'}
          title={'All Task'}
          value={taskData ? taskData.length : 0}
          colorbackground={'#F4EBF6'}
          onPress={() => {
            setselectedType('all');
          }}
        />
        <SummaryCard
          color={'#009589'}
          title={'Completed'}
          value={
            taskData ? taskData.filter(item => item.stat != 'Due').length : 0
          }
          colorbackground={'#EAF6F5'}
          onPress={() => {
            setselectedType('complete');
          }}
        />
        <SummaryCard
          color={'#FF0000'}
          title={'Due'}
          value={
            taskData ? taskData.filter(item => item.stat == 'Due').length : 0
          }
          colorbackground={'rgba(255, 232, 232, 1)'}
          onPress={() => {
            setselectedType('due');
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          setShowmodal(true);
        }}
        style={styles.addTaskView}>
        <Text style={styles.addTaskText}>Add Task</Text>
      </TouchableOpacity>

      <ScrollView
        style={{width: '100%', marginTop: 20}}
        showsVerticalScrollIndicator={false}>
        <View style={{}}>
          {previewData &&
            previewData.length > 0 &&
            previewData.map((item, index) => {
              return (
                <TaskCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  stat={item.stat}
                  id={item.id}
                  completePress={id => {
                    onComplete(id);
                  }}
                  deletePress={id => {
                    onDelete(id);
                  }}
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
