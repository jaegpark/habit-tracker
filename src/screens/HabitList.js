import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';


import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {NewHabitScreen} from "./NewHabit";

import { EditHabitScreen } from "./EditHabit";


import { useContext } from 'react';
import { GlobalsContext } from '../globals';

export default function HabitListScreen( {navigation, route}){

  const { listOfHabits, setHabits } = useContext(GlobalsContext);

  
  const onPressHandler = (habitName, habitID) => {
      navigation.navigate("Edit Habit", {habitName: habitName, habitID: habitID});
  }

  const newHabitHandler = () => {
      navigation.navigate("New Habit");
  }

  return (
  <View style={styles.container}>
      <Text style={styles.headers}> Habits </Text>
      { listOfHabits.map((habit) => (
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
  
  
  