import React, { useState } from 'react';
import { FlatList, KeyboardAvoidingView, StyleSheet, TextInput, Platform } from 'react-native';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import ToDoItem from '../components/TodoItem';

let id = '4'

export default function TabOneScreen() {
  const [title, setTitle] = useState('')
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

  const createNewItem = (atIndex: number) => {
    //console.warn(`new item at ${atIndex}`);
    const newTodos = [...todos]
    newTodos.splice(atIndex, 0, {
      id: id,
      content: '',
      isCompleted: false
    })
    setTodos(newTodos)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 150 : 0}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <TextInput 
          style={styles.title}
          placeholder={'Title Here'}
          value={title}
          onChangeText={setTitle}
        />
        <FlatList 
          data={todos}
          renderItem={
            ({ item, index }) => 
              <ToDoItem 
                todo={item} 
                onSubmit={() => createNewItem(index + 1)}
              />
            }
          style={{ width: '100%' }}
        />
      </View>
    </KeyboardAvoidingView>
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
    color: Colors.dark.text,
    width: '100%',
    marginBottom: 15,
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
    textShadowColor: Colors.dark.title,
  },
});
