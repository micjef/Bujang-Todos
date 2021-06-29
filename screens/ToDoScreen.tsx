import React, { useEffect, useState } from 'react';
import { FlatList, KeyboardAvoidingView, StyleSheet, TextInput, Platform, Alert } from 'react-native';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import ToDoItem from '../components/TodoItem';

import { useRoute } from '@react-navigation/native'
import { gql, useMutation, useQuery } from '@apollo/client'
//import AsyncStorage from '@react-native-async-storage/async-storage'

const GET_PROJECTS = gql`
  query getTaskList($id:ID!){
    getTaskList(id: $id) {
        id
        title
        createdAt
        todos {
            id
            content
            isCompleted
        }
    }
  }
`

const CREATE_TODO = gql`
  mutation createToDo($content: String!, $taskListId: ID!) {
    createToDo(content: $content, taskListId: $taskListId) {
        id
        content
        isCompleted

        taskList {
            title
            todos {
                id
                content
                isCompleted
            }
        }
    }
  }
`

let id = '4'

export default function ToDoScreen() {
  const [title, setTitle] = useState('')
  //const [todos, setTodos] = useState([])
  const [project, setProject] = useState(null)

  const route = useRoute()
  const id = route.params.id

  const { data, error, loading } = useQuery(GET_PROJECTS, { variables: { id }})

  const [createTodo, { data: createTodoData, error: createTodoError }] = useMutation(CREATE_TODO, { refetchQueries: GET_PROJECTS })

  useEffect(() => {
    if (error) {
      Alert.alert('Error fetching projects', error.message)
    }
  }, [error])

  useEffect(() => {
    if (data) {
      setProject(data.getTaskList)
      setTitle(data.getTaskList.title)
    }
  }, [data])

  const createNewItem = (atIndex: number) => {
    createTodo({
      variables: {
        content: '',
        taskListId: id,
      }
    })

    /*//console.warn(`new item at ${atIndex}`);
    const newTodos = [...todos]
    newTodos.splice(atIndex, 0, {
      id: id,
      content: '',
      isCompleted: false
    })
    setTodos(newTodos)*/
  }

  if (!project) {
    return null
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 130 : 0}
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
          data={project.todos}
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
