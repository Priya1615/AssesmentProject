import {FontConstants} from '../Assets/FontConstants';
import React, {FC} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import TaskCard from '../Components/TaskCard';

interface Props {}

const HomeScreen: FC<Props> = ({}) => {
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
    <View
      style={styles.mainView}>
      <ScrollView
        style={{width: '100%', marginTop: 20}}
        showsVerticalScrollIndicator={false}>
        <View style={{padding: 10}}>
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
  mainView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
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
  forgetPasswordDiv: {alignSelf: 'flex-end'},
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
    color: '#fff',
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

export default HomeScreen;
