import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function PairScreen({navigation}){
  
  const onPressHandler = () => {
    navigation.navigate("Habit List");
  }

  return (
    <View style={styles.container}>
      <Text>Pair Your Device</Text>
      <Pressable onPress={onPressHandler}>
        <Text>Go to Habit List Screen</Text>
      </Pressable>
    </View>

  )
}

function HabitListScreen({navigation}){
  const onPressHandler = () => {
    navigation.navigate("Splash");
  }

  return (
    <View style={styles.container}>
      <Text>Habit List Screen</Text>
      <Pressable> 
        <Text>Go back Splash</Text>
      </Pressable>
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
      <Tab.Navigator>
        <Tab.Screen 
          name="Pair Device" 
          component={PairScreen} 
          options={{
            header: () => null
          }}
        />

        <Tab.Screen 
          name="Habit List" 
          component={HabitListScreen} 
        />
      </Tab.Navigator>
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
  }
});


