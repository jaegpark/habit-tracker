import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Button, Text, TextInput, Platform, View} from 'react-native';
import styles from '../styles'

import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import { useContext } from 'react';
import { GlobalsContext } from '../globals';




export default function NewHabitScreen({navigation, route, habitsData}){
    // Habit name
    
    const [text, onChangeText] = useState('Default Habit');
    const [desc, onChangeDesc] = useState('Default Description');
    // Starting date
    const [date, setDate] = useState(new Date());
    // Frequency
    const [selectedFrequency, setSelectedFrequency] = useState('Option 1');

    const [led, setLed] = useState('red');
    
    const [showLEDPicker, setShowLEDPicker] = useState(false);

    const { listOfHabits, setHabits } = useContext(GlobalsContext);

    const handleSaveNewHabit = () => {
        // update the global state from GlobalsContext
        // add new habit to the list
        const newhabit = {id: listOfHabits.length + 1, name: text, date: date, 
            frequency: selectedFrequency, descriptor: desc, led_colour: led
            };
        setHabits([...listOfHabits, newhabit]);
        // return back to the list
        backToList();
    }

    const backToList = () =>{
        navigation.navigate('Habit List');
    }
    return(
        <View style={styles.container}>
            <Text style={[styles.headings, styles.mediumPadding]}>Habit Name</Text>
            <TextInput
                onChangeText={onChangeText}
                placeholder="Habit Name:"
                style={styles.input}
            />
            <TextInput
                onChangeText={onChangeDesc}
                placeholder="Description:"
                style={styles.input}
            />

            <Text style={styles.headings}>Select Starting Date:</Text>
            <DateTimePicker
            value={date}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={(event, selectedDate) => {
                setDate(selectedDate || date);
            }}
            style={ {height: 120}}
            />

            <Text style={styles.headings}>Repeat Every:</Text>
            <Picker
                selectedValue={selectedFrequency}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedFrequency(itemValue)
                }
                itemStyle={ {height: 120}}

                
                >
                <Picker.Item label="Daily" value="daily" />
                <Picker.Item label="Weekly" value="weekly" />
                <Picker.Item label="Monthly" value="monthly" />
            </Picker>
            <Text style={styles.headings}>Select LED:</Text>
            
            {<Picker
                selectedValue={led}
                onValueChange={(itemValue, itemIndex) =>
                    setLed(itemValue)
                }
                itemStyle={ {height: 120}}
                >
                <Picker.Item label="Red" value="R" />
                <Picker.Item label="Green" value="G" />
                <Picker.Item label="Blue" value="B" />
            </Picker>}

            <Button title="SAVE" onPress={handleSaveNewHabit}/>
        </View>
    );
}