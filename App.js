import { StatusBar } from 'expo-status-bar';
import React, { useState}  from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';

import GoalItem from './Components/GoalItem';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');

  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () =>{
    console.log(enteredGoal)
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: enteredGoal}
    ]);
  };

  return (
    <View style={styles.screen}>
         <View style={styles.inputContainer}>
          <TextInput
          placeholder="Enter Goal Here" 
          style = {styles.input} 
          onChangeText={goalInputHandler}
          value = {enteredGoal}
          />
          <Button title = "Add" onPress={addGoalHandler} />
        </View>

        <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
         renderItem={itemData => GoalItem title = />}

         />

         </View>
  );
}

const styles = StyleSheet.create({

  screen: {
    padding: 80
  },

  inputContainer:{
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems:'center'
  },

  input:{
    width: '80%', 
    borderColor: 'black',
    borderWidth: 1,  
    padding: 10
  },

  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }

  

  
});


