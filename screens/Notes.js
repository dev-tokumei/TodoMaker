import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Notes = () => {
  return (
    <View style={style.containerView}>
      <View style={style.headingContainer}>
        <Text style={style.title}>Your Notes....</Text>
        <View style={style.iconContainer}>
          <TouchableOpacity style={style.button}>
            <Icon name="delete" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={style.button}>
            <Icons name="add" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View></View>
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
    fontWeight: '700',
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
});
