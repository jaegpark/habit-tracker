import React, { createContext, useContext, useState } from 'react';
import { Text, View} from 'react-native';

export const GlobalsContext = createContext({});

export const GlobalsProvider = ({ children }) => {
    const [listOfHabits, setHabits] = useState(
        [
            {id: 1, name: 'Meditate', frequency: "weekly", date: '2021-01-01', descriptor: 'Meditate for 10 minutes', led_colour: 'Red'},
            {id: 2, name: 'Workout', frequency: "weekly", date: '2021-01-01', descriptor: 'Workout for 30 minutes', led_colour: 'Green'},
            {id: 3, name: 'Read', frequency: "weekly", date: '2021-01-01', descriptor: 'Read for 30 minutes', led_colour: 'Blue'},
        ]
    );
 
    
    return (<GlobalsContext.Provider value={{listOfHabits, setHabits}}>
        {children}
        </GlobalsContext.Provider>);

};
      
  