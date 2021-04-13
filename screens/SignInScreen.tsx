import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'
import Colors from '../constants/Colors'
import Navigation from '../navigation'

const SignInScreen = () => {
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = () => {

  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{
          color: Colors.dark.text,
          fontSize: 18,
          width: '100%',
          marginVertical: 25,
        }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          color: Colors.dark.text,
          fontSize: 18,
          width: '100%',
          marginVertical: 25,
        }}
      />
      <Pressable 
        onPress={onSubmit}
        style={{
          backgroundColor: '#e33062',
          height: 50,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
        }}
      >
        <Text
          style={{
            color: Colors.dark.text,
            fontSize: 18,
            fontWeight: 'bold'
          }}
        >
          Sign In
        </Text>
      </Pressable>
      <Pressable 
        onPress={() => navigation.navigate('SignUpScreen')}
        style={{
          height: 50,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#e33062',
          }}
        >
          New here ? Sign Up
        </Text>
      </Pressable>
    </View>
  )
}

export default SignInScreen
