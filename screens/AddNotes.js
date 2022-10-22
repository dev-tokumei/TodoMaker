import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';

const AddNotes = () => {
  return (
    <ScrollView style={{elevation: 10}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={style.containerNotes}>
            <View style={style.Notes}>
              <TextInput
                placeholder="Type Here..."
                placeholderTextColor="#ccc"
                multiline={true}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={style.bntConrainer}>
          <TouchableOpacity style={style.button}>
            <Icons name="add" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default AddNotes;

const style = StyleSheet.create({
  containerNotes: {
    width: '100%',
    height: 300,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  Notes: {
    width: '96%',
    height: '94%',
    borderColor: '#0F52BA',
    borderWidth: 3,
    marginTop: 15,
    marginLeft: 9,
  },
  bntConrainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#0F52BA',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
