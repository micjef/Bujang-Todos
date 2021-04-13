import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'
import Colors from '../../constants/Colors'

interface CheckBoxProps{
  isChecked: boolean,
  onPress: () => void,
}

const Checkbox = ( props: CheckBoxProps) => {
  const {onPress, isChecked} = props
  
  const name = props.isChecked ? 'checkbox-marked-outline' : 'checkbox-blank-outline'
  return (
    <Pressable onPress={onPress} /*style={{ flexDirection: 'row' }}*/>
      <MaterialCommunityIcons 
          name={name}
          size={24}
          color= {Colors.dark.checkBox}
        />
        {/*<TextInput 
          style={{
            flex: 1,
            fontSize: 18,
            color: 'white',
          }}
        />*/}
    </Pressable>
  )
}

export default Checkbox
