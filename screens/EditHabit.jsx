import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Button, Text, TextInput, Platform, View} from 'react-native';
import styles from '../styles'

import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function EditHabitScreen({navigation, route, habitsData}){
    // Habit name
    const [text, onChangeText] = useState('Enter Habit Name (this is a text-field)');
    // Starting date
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const handlePress = () => {
        setShowPicker(true);
    };
    // Frequency
    const [selectedFrequency, setSelectedFrequency] = useState('Option 1');
    // Return back to list
    const backToList = () =>{
        navigation.navigate('Habit List');
    }
    return(
        <View styles={styles.container}>
            <Text>Habit Name</Text>
            <TextInput
                onChangeText={onChangeText}
                value={text}
            />
            <Text>Select starting date:</Text>
            <Button title="Show Date Picker" onPress={handlePress} />
            {showPicker && (
                <DateTimePicker
                value={date}
                mode={'date'}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={(event, selectedDate) => {
                    setShowPicker(false);
                    setDate(selectedDate || date);
                }}
                />
            )}
            <Text>Repeat every:</Text>
            <Picker
                selectedValue={selectedFrequency}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedFrequency(itemValue)
                }>
                <Picker.Item label="Daily" value="daily" />
                <Picker.Item label="Weekly" value="weekly" />
                <Picker.Item label="Monthly" value="monthly" />
            </Picker>
            <Button title="SAVE" onPress={backToList}/>
        </View>
    );
}