import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, Alert } from 'react-native'
import Colors from '../constants/Colors'

import { useMutation, gql } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SIGN_IN_MUTATION = gql`
  mutation signIn(
    $email: String!,
    $password: String!
  ){
    signIn(input : {
      email: $email,
      password: $password
    }){
      token
      user{
        id
        name
        email
      }
    }
  }
`

const SignInScreen = () => {
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [signIn, { data, error, loading }] = useMutation(SIGN_IN_MUTATION)

  if (error) {
    Alert.alert('Invalid credentials, try again')
  }

  if (data) {
    //save token
    AsyncStorage.setItem('token', data.signIn.token).then(() => {
      //redirect home
      navigation.navigate('Home')
    })

    
  }

  console.log(data)
  console.log(error)

  const onSubmit = () => {
    signIn({variables: { email, password }})
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
        disabled={loading}
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
