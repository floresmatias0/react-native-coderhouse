/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  TextInput,
  Item,
  View,
  Text
} from 'react-native';


const App = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChangeText = (text) => {
    setTask(text)
  }

  const addTask = () => {
    setTaskList([
      ...taskList,
      task
    ])
    setTask("")
  }

  const renderText = ({item}) => {
    return <Text>{item}</Text>
  }

  return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <TextInput 
            style={styles.textInput}
            onChangeText={handleChangeText}
            value={task}
            placeholder='name a task'
          />
          <Button 
            title='Send'
            color='#9191E9'
            onPress={addTask}
            disabled={task.trim().length === 0}
          />
        </View>
        <View style={styles.taskListContainer}>
          <Text style={styles.taskListTitle}>Task List</Text>
          {taskList?.length > 0 ? (
            <FlatList
              data={taskList}
              renderItem={renderText}
            />
          ) : (
            <Text>Empty list</Text>
          )}
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex: 1
  },
  formContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-around'
  },
  textInput: {
    flex: 0.8,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  taskListTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000'
  },
  taskListContainer: {
    paddingHorizontal: 40,
    marginTop: 10
  }
});

export default App;
