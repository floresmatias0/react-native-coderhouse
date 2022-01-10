import React from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';
import {styles} from './styles';

const CustomButton = ({ onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;