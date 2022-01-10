import React from 'react';
import {
    View,
    TextInput
} from 'react-native';
import {styles} from './styles';
import CustomButton from '../../atoms/CustomButton';

const InputList = ({
    task,
    handleChangeText,
    addTask
}) => (
    <View style={styles.formContainer}>
        <TextInput 
            style={styles.textInput}
            onChangeText={handleChangeText}
            value={task}
            placeholder='name a task'
        />
        <CustomButton
            title='Send'
            onPress={addTask}
        />
    </View>
)

export default InputList;