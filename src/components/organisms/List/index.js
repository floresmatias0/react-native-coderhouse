import React, {useState} from 'react';
import {
    FlatList,
    View,
    Text
} from 'react-native';
import {styles} from './styles';
import TaskList from '../../molecules/TaskList';
import InputList from '../../molecules/InputList';

const List = () => {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
  
    const handleChangeText = (text) => {
      setTask(text)
    }
  
    const addTask = () => {
      if(task.trim().length !== 0) {
        setTaskList([
          ...taskList,
          {
            id: Math.random(),
            task
          }
        ])
        setTask("")
      }
    }
  
    const deleteTask = (id) => setTaskList(taskList.filter(item => item.id !== id));

    return (
        <View style={styles.taskListContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.taskTitle}>Add Task</Text>
              <InputList
                  task={task}
                  addTask={addTask}
                  handleChangeText={handleChangeText}
              />
            </View>
            {taskList?.length > 0 ? (
              <View style={styles.listContainer}>
                <Text style={styles.taskListTitle}>Task List</Text>
                <FlatList
                    keyExtractor={(item => item.id.toString())}
                    data={taskList}
                    renderItem={({item}) => <TaskList item={item} deleteTask={deleteTask}/>}
                />
              </View>
              ) : (
              <Text style={styles.emptyText}>Empty list</Text>
            )}
        </View>
    )
}

export default List;