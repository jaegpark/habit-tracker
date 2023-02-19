import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';


import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import { Provider } from "react-redux"
//import { storee } from "../redux/reducers"

import {NewHabitScreen} from "./NewHabit";

import { EditHabitScreen } from "./EditHabit";

//console.log("Store: ", Store);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function HabitListScreen( {navigation, route}){
    //const Habits = useSelector(state => state.habitsListReducer);
    //const dispatch = useDispatch();

    /* const habits = useSelector(state => state.habitReducer.habits);
    const dispatch = useDispatch();

    const handleAddHabit = () => {
      dispatch(addHabit({ id: Date.now(), name: `Habit ${habits.length + 1}` }));
    };

    const handleDeleteHabit = (id) => {
      dispatch(deleteHabit(id));
    }; */

    const [Habits, addHabit] = useState([
    { id: 1, name: 'Meditate' },
    { id: 2, name: 'Workout' },
    { id: 3, name: 'Read' },
    { id: 4, name: 'Code' },
    ]); 
    
    const onPressHandler = (habitName, habitID) => {
        navigation.navigate("Edit Habit", {habitName: habitName, habitID: habitID});
    }

    const newHabitHandler = () => {
        navigation.navigate("New Habit");
    }

    return (
    <View style={styles.container}>
        <Text style={styles.headers}> Habits </Text>
        { Habits.map((habit) => (
        <Button title={habit.name} key={habit.id} onPress={() => onPressHandler(habit.name, habit.id)}>
        </Button>
      ))} 
      <Button title="Add New Habit" onPress={() => newHabitHandler()}></Button>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
      width:200,
      height:40,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 5,
      textAlign: 'center',
      fontSize: 20,
      marginTop: 20,
      marginBottom: 20,
    }, item:{
      backgroundColor: 'pink',
    }, headers:{
      fontSize: 36,
      fontWeight: 'bold',
    }, headings:{
      fontSize: 24,
      fontWeight: 'bold',
    }
  });
  
  
  