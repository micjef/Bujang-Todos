import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import Colors from '../../constants/Colors'
import Checkbox from '../Checkbox'

interface ToDoItemProps{
  todo: {
    id: String,
    content: String,
    isCompleted: boolean,
  },
  onSubmit: () => void,
}

const ToDoItem = ({todo, onSubmit}: ToDoItemProps) => {
  const [isChecked, setIsChecked] = useState(false)
  const [content, setContent] = useState('')

  const input = useRef(null)

  useEffect(() => {
    if(!todo){
      return
    }
    setIsChecked(todo.isCompleted)
    setContent(todo.content)
  }, [todo])

  useEffect(() => {
    if(input.current){
      input?.current?.focus()
    }
    //input.current.focus()
  }, [input])

  const onKeyPress = ({ nativeEvent }) => {
    //console.log(nativeEvent);
    if(nativeEvent.key === 'Backspace' && content === ''){
      console.warn('delete item');
      
    }
  }

  /*const onSubmit = () => {
    console.warn('submit');
    
  }*/

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
        ref={input}
        value={content}
        onChangeText={setContent}
        style={{
          flex: 1,
          fontSize: 18,
          color: Colors.dark.text,
          marginLeft: 12,
        }}
        multiline
        onSubmitEditing={onSubmit}
        blurOnSubmit
        onKeyPress={onKeyPress}
      />
    </View>
  )
}

export default ToDoItem
