/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Notes from './screens/Notes';
import AddNotes from './screens/addNotes';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator style={style.sectionContainer}>
        <Stack.Screen name="Home">{props => <Notes {...props} />}</Stack.Screen>
        <Stack.Screen name="AddNotes">
          {props => <AddNotes {...props} />}
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
