import React, { createContext, useContext, useState } from 'react';
import { Text, View} from 'react-native';

export const GlobalsContext = createContext({});

export const GlobalsProvider = ({ children }) => {
    const [listOfHabits, setHabits] = useState(
        [
            {id: 1, name: 'Meditate', frequency: 0, date: '2021-01-01'},
            {id: 2, name: 'Workout', frequency: 0, date: '2021-01-01'},
            {id: 3, name: 'Read', frequency: 0, date: '2021-01-01'},
        ]
    );
 
    
    return (<GlobalsContext.Provider value={{listOfHabits, setHabits}}>
        {children}
        </GlobalsContext.Provider>);

};
      
  