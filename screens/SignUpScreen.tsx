import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, ActivityIndicator, Alert } from 'react-native'
import Colors from '../constants/Colors'

import { useMutation, gql } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SIGN_UP_MUTATION = gql`
mutation signUp(
  $email: String!,
  $password: String!,
  $name: String!
){
  signUp(input: {
    email: $email,
    password: $password,
    name: $name
  }) {
    token
    user{
      id
      name
      email
    }
  }
}
`

const SignUpScreen = () => {
  const navigation = useNavigation()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //mutation[0] : a function to trigger the mutation
  //mutation[1] : result object
  //{data, error, loading}
  const [signUp, { data, error, loading }] = useMutation(SIGN_UP_MUTATION)

  if (error) {
    Alert.alert('Error signing up. Try again')
  }

  if (data) {
    //save token
    AsyncStorage.setItem('token', data.signUp.token).then(() => {
      //redirect home
      navigation.navigate('Home')
    })

    
  }

  console.log(data)
  console.log(error)
  
  const onSubmit = () => {
    signUp({variables: { name, email, password }})
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{
          color: Colors.dark.text,
          fontSize: 18,
          width: '100%',
          marginVertical: 25,
        }}
      />
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
        {loading && <ActivityIndicator />}
        <Text
          style={{
            color: Colors.dark.text,
            fontSize: 18,
            fontWeight: 'bold'
          }}
        >
          Sign Up
        </Text>
      </Pressable>
      <Pressable 
        disabled={loading}
        onPress={() => navigation.navigate('SignInScreen')}
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
          Already Have an Account ? Sign In
        </Text>
      </Pressable>
    </View>
  )
}

export default SignUpScreen
