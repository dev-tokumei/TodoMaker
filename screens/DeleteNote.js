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
      <View style={style.containerNote}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={style.emptyButtom}>
            <Text style={style.emptyButtomText}>Undo All</Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontWeight: '800', fontSize: 18, color: '#0F52BA'}}>
          Total:{' '}
        </Text>
      </View>
    </ScrollView>
  );
};

export default DeleteNote;

export const style = StyleSheet.create({
  containerNote: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  emptyButtom: {
    width: '50%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    backgroundColor: '#0F52BA',
  },
  emptyButtomText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#fff',
  },
});
