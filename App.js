import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HabitListScreen({navigation}){
  const [Habits, setHabits] = useState([
    { id: 1, text: 'Meditate' },
    { id: 2, text: 'Workout' },
    { id: 3, text: 'Read' },
    { id: 4, text: 'Code' },
  ]);

  const onPressHandler = (habitName, habitID) => {
    navigation.navigate("Edit Habit", {habitName: "Meditation", habitID: 1});
  }


  return (
    <View style={styles.container}>
       { 
        Habits.map((item) => {
          return (
            <Button title= {item.text} onPress={ onPressHandler } key={item.id} style={styles.item}>
                
            </Button>
            
          )
        })
      } 
      
      <Text>Habit List Screen</Text>
      <Pressable onPress={ onPressHandler }> 
        <Text>Go to habit edit page</Text>
      </Pressable>
    </View>
  )

}


function EditHabitScreen({navigation, route}){
  
  const {habitName, habitID}  = route.params;

  const onPressHandler = () => {
    navigation.navigate("Habit List");
  }

  return (
    <View style={styles.container}>
      

      <Text>Edit your habit</Text>
      <Pressable onPress={onPressHandler}>
        <Text>Go to Habit List Screen</Text>
      </Pressable>
      <Text>Our Habit Name: {habitName} </Text>

    </View>

  )
}

export default function App() {
  /* const [Items, setItems] = useState([
    { id: 1, text: 'Meditate' },
    { id: 2, text: 'Workout' },
    { id: 3, text: 'Read' },
    { id: 4, text: 'Code' },
  ]);

  const [name, setName] = useState('')

  return (  
    <View style={styles.container}>
      { {
        Items.map((item) => {
          return (
            <View key={item.id} style={styles.item}>
              <Text style={styles.text}>{item.text}</Text>
            </View>
          )
        })
      } }
      
      <Text>Welcome to Habit Tracker.</Text>
      <Text>What's your name?</Text>
      <TextInput 
        style={styles.input}
        placeholder="e.g. John Doe" 
        onChangeText={(value) => setName(value)}/>

      <Button title="Get Started" onPress={
        () => alert('Button clicked!')} />
      <StatusBar style="auto" />
    
    </View> 
  );*/
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
  }
});


