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
  
    //const {Habits} = useSelector(state => state.Habits);
    //const dispatch = useDispatch();
  
    const onPressHandler = () => { 
      navigation.navigate("Habit List");
    }
    const deleteHabit = (habitName) => {
      //dispatch(delHabit(habitName));
      
    }
  
    return (
      <View style={styles.container}>
        
        <Text style={styles.headers}> {habitName} </Text>
        <Text style={styles.headings}> Description</Text>
        <Text>Meditate for at least 5 minutes every day.</Text>
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
    }
  });
  
  
  