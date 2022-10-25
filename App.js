/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Notes from './screens/Notes';
import AddNotes from './screens/AddNotes';
import DeleteNote from './screens/DeleteNote';

const Stack = createNativeStackNavigator();
const [note, setNote] = useState();
const [notes, setNotes] = useState();

const handleNote = () => {
  let newNote = note;
  let newNotes = [notes, ...newNote];
  setNotes(newNotes);
  setNote('');
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator style={style.sectionContainer}>
        <Stack.Screen name="Home">{props => <Notes {...props} />}</Stack.Screen>
        <Stack.Screen name="AddNotes">
          {props => (
            <AddNotes
              {...props}
              handleNote={handleNote}
              note={note}
              setNote={setNote}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="DeleteNote">
          {props => <DeleteNote {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
