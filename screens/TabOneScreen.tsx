import React, { useState } from 'react';
import { FlatList, StyleSheet, TextInput } from 'react-native';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import ToDoItem from '../components/TodoItem';

export default function TabOneScreen() {
  const [todos, setTodos] = useState([
    {
      id: '1',
      content: 'Write with fun',
      isCompleted: true,
    }, {
      id: '2',
      content: 'Write with fun',
      isCompleted: true,
    }, {
      id: '3',
      content: 'Write with fun',
      isCompleted: false,
    }
  ])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <FlatList 
        data={todos}
        renderItem={({ item }) => <ToDoItem todo={item} />}
        style={{ width: '100%' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
    backgroundColor: Colors.dark.tint,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.dark.title,
  },
});
