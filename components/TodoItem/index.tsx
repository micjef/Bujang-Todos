import React, { useEffect, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import Colors from '../../constants/Colors'
import Checkbox from '../Checkbox'

interface ToDoItemProps{
  todo: {
    id: String,
    content: String,
    isCompleted: boolean,
  }
}

const ToDoItem = ({todo}: ToDoItemProps) => {
  const [isChecked, setIsChecked] = useState(false)
  const [content, setContent] = useState('')

  useEffect(() => {
    if(!todo){
      return
    }
    setIsChecked(todo.isCompleted)
    setContent(todo.content)
  }, [todo])

  return (
    <View style={{ 
      flexDirection: 'row',
      backgroundColor: 'none',
      alignItems: 'center',
      width: '100%',
      marginVertical: 5,
    }}>
      <Checkbox 
        isChecked={isChecked}
        onPress={() => {setIsChecked(!isChecked)}}
      />
      <TextInput 
        value={content}
        onChangeText={setContent}
        style={{
          flex: 1,
          fontSize: 18,
          color: Colors.dark.text,
          marginLeft: 12,
        }}
        multiline
      />
    </View>
  )
}

export default ToDoItem
