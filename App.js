import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




import HabitListScreen from './src/screens/HabitList';
import EditHabitScreen  from './src/screens/EditHabit';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Habit List" 
            component={HabitListScreen} 
            options={{
              header: () => null
            }}
          />

          <Stack.Screen 
            name="Edit Habit" 
            component={EditHabitScreen} 
          />
        </Stack.Navigator>
      </NavigationContainer>
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


