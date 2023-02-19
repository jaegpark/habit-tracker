import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import React, { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HabitListScreen from './src/screens/HabitList';
import EditHabitScreen  from './src/screens/EditHabit';
import NewHabitScreen from './src/screens/NewHabit';

import styles from './src/styles';
import { GlobalsProvider, GlobalsContext } from './src/globals';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



export default function App() {
  const { listOfHabits, setHabits } = useContext(GlobalsContext);

  return (
    <GlobalsProvider>
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
            options={{
              header: () => null
            }}
          />

          <Stack.Screen
          name = "New Habit"
          component={NewHabitScreen}
          options={{
              header: () => null
            }}>

          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalsProvider>
  )
}



