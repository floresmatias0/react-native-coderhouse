import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    taskListTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
        color: '#000000'
    },
        taskListContainer: {
        paddingHorizontal: 40,
        marginTop: 10
    },
    emptyText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10
    },
    taskTitle: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000000',
        marginVertical: 10
    },
    inputContainer: {
        elevation: 2,
        borderRadius: 1
    },
    listContainer: {
        marginVertical: 10,
        elevation: 2,
        borderRadius: 1
    }
})