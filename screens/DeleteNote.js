import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const DeleteNote = () => {
  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.containerNote}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: '25%',
            }}>
            <TouchableOpacity style={style.emptyButtom}>
              <Text style={style.emptyButtomText}>Undo All</Text>
            </TouchableOpacity>
          </View>
          <Text style={{fontWeight: '800', fontSize: 18, color: '#0F52BA'}}>
            Total:{' '}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: '25%',
            }}>
            <TouchableOpacity style={style.emptyButtom}>
              <Text style={style.emptyButtomText}>Empty</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.devider}></View>
      </View>
    </ScrollView>
  );
};

export default DeleteNote;

export const style = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerNote: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  emptyButtom: {
    width: '100%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    backgroundColor: '#0F52BA',
  },
  emptyButtomText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  devider: {
    borderBottomWidth: 3,
    borderBottomColor: '#0F52BA',
    width: '95%',
  },
});
