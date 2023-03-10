import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState, useContext } from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {GlobalsContext} from '../globals';

export default function EditHabitScreen({navigation, route}){
  
    const {habitName, habitID}  = route.params;
    
    const { listOfHabits, setHabits } = useContext(GlobalsContext);
    
    const onPressHandler = () => { 
      navigation.navigate("Habit List");
    }
    const deleteHabit = (habitName) => {
        // loop through listOfHabits and delete the habit with the name habitName
        // setHabits to the new list
        setHabits(listOfHabits.filter((item) => item.name !== habitName));
        backToList();
    }

    const backToList = () =>{
        navigation.navigate('Habit List');
    }
  
    return (
      <View style={styles.container}>
        
        <Text style={styles.headers}> {habitName} </Text>
        {
        listOfHabits.map( // description
            (habit) => habit.name === habitName && (
                <Text key={habit.id} style={styles.normal}>{habit.descriptor}</Text>
              ))    
        }
        {
        listOfHabits.map( // description
            (habit) => habit.name === habitName && (
                <Text key={habit.id} style={styles.normal}>Occurs {habit.frequency}.</Text>
              ))    
        }
        {
          listOfHabits.map( // description
          (habit) => habit.name === habitName && (
              <Text key={habit.id} style={styles.normal}>LED: {habit.led_colour}</Text>
            ))
        }
        
        {/* <TextInput  style={styles.input}
          placeholder="New Description" 
          //TODO : onChangeText= {(value) => setName(value)} // FOR NOW IT DELETES {dispatch(delHabit(habitName))} //
        /> */}
        <Button title="Delete Habit" onPress={ event => deleteHabit(habitName) }></Button>
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
    }, normal:{
        fontSize: 18,
        fontWeight: 'normal',
    }
  });
  
  
  