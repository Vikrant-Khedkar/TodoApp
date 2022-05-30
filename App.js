import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Task List🎯</Text>

      <View style={styles.items}>
        <Task text={'Drink Milk'}></Task>
        <Task text={'Work on project'}></Task>
        <Task text={'Eat vegetables'}></Task>
        <Task text={'Get Groceries'}></Task>
        <Task text={'Call Mom'}></Task>
        <Task text={'Complete Assignment'}></Task>
        <Task text={'Read News'}></Task>
        <Task text={'Go to Gym'}></Task>
       


      </View>

      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  
  },
  title:{
    paddingTop:50,
    paddingLeft:10,
    fontSize:25,
    fontWeight:'bold',
    
  },
  items:{
    paddingTop:50,
    paddingHorizontal:20,

  },
});
