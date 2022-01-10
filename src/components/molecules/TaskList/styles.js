import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  contentList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems:'center',
    height: 50,
    marginVertical: 20
  },
  contentButtons: {
    flexDirection: 'row',
    alignItems:'center',
  },  
  textList: {
    fontSize: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    fontWeight: 'bold'
  },
  delete: {
    backgroundColor: 'red',
    width: 24,
    height: 24,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    borderRadius: 50,
    marginHorizontal: 10
  }
})