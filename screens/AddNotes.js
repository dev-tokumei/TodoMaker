import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';

const AddNotes = () => {
  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
        <View style={{justifyContent: 'space-around', padding: 20}}>
          <Text style={{color: 'red'}}>Hello</Text>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default AddNotes;

export const style = StyleSheet.create({
  containerNotes: {
    width: '90%',
    height: '100%',
    borderColor: '#0F52BA',
    borderWidth: 3,
    elevation: 10,
    padding: 20,
    marginTop: 20,
    backgroundColor: '#000',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
  shadowProp: {
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
