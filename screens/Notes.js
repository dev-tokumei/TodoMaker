import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialIcons';

const Notes = ({navigation}) => {
  return (
    <View style={style.containerView}>
      <View style={style.headingContainer}>
        <Text style={style.title}>Your Notes....</Text>
        <View style={style.iconContainer}>
          <TouchableOpacity
            style={style.button}
            onPress={() => navigation.navigate('DeleteNote')}>
            <Icon name="delete" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.button}
            onPress={() => navigation.navigate('AddNotes')}>
            <Icons name="add" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.count}>
        <Text style={{fontWeight: '800', fontSize: 18, color: '#0F52BA'}}>
          Total:
        </Text>
      </View>
      <View style={style.inputContainer}>
        <TextInput
          placeholder="Search..."
          placeholderTextColor="#0F52BA"
          style={style.TextInput}
        />
        <TouchableOpacity style={style.button}>
          <Icons name="search" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Icons name="clear" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Notes;
export const style = StyleSheet.create({
  containerView: {
    padding: 10,
    paddingHorizontal: 20,
    marginBottom: 70,
    opacity: 0.9,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingLeft: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#0F52BA',
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
  count: {
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#0F52BA',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
  TextInput: {
    width: '70%',
    height: '90%',
    paddingHorizontal: 20,
    borderColor: '#0F52BA',
    borderWidth: 3,
    borderRadius: 5,
  },
});
