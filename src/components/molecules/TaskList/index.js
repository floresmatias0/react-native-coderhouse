import React, { useState } from 'react';
import {
    View,
    Text
} from 'react-native';
import {styles} from './styles';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const TaskList = ({
    item,
    deleteTask
}) => {
    // const [isSelected, setSelection] = useState([])

    // const verifyTask = (bool) => {
    //     if(isSelected.length > 0) {
    //         for(let i = 0; i < isSelected.length; i++) {
    //             if(isSelected[i].id === item.id) {
    //                 setSelection([...isSelected, {
    //                     ...isSelected[i],
    //                     checked: false
    //                 }])
    //             } else {
    //                 setSelection([...isSelected, {
    //                     ...item,
    //                     checked: bool
    //                 }])
    //             }
    //         }
    //     } else {
    //         setSelection([...isSelected, {
    //             ...item,
    //             checked: bool
    //         }])
    //     }
    // }

    return (
        <View style={styles.contentList}>
            <Text style={styles.textList}>{item.task}</Text>
            <View style={styles.contentButtons}>
                <Text 
                    onPress={() => deleteTask(item.id)}
                    style={styles.delete}
                >
                    X
                </Text>
                <BouncyCheckbox onPress={(isChecked) => {}}/>
            </View>
        </View>
    )
}

export default TaskList;