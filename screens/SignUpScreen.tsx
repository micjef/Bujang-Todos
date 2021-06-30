import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, ActivityIndicator, Alert, Dimensions, Image, Linking } from 'react-native'

import { useMutation, gql } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './SignUp/Styles'

const dekstopRightBg = require('../assets/images/jungle.jpg')

const windowWidth = Dimensions.get('window').width

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

  const onSubmit = () => {
    signUp({variables: { name, email, password }})
  }

  return (
    <View>
      { windowWidth > 1200 ? (
        <View style={styles.dekstopUp_view}>
          <View style={styles.dekstopUp_left}>
            <Image source={dekstopRightBg} style={styles.dekstopUp_logo} />

            <TextInput 
              placeholder="Name"
              value={name}
              onChangeText={setName}
              style={styles.dekstopUp_input}
            />
            
            <TextInput 
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={styles.dekstopUp_input}
            />

            <TextInput 
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.dekstopUp_input}
            />

            <Pressable 
              onPress={onSubmit}
              disabled={loading}
              style={styles.dekstopUp_login}
            >
              <Text style={styles.dekstopUp_loginText}>Register</Text>
            </Pressable>
            
            <View style={styles.dekstopUp_toRegister}>
              <Text style={styles.dekstopUp_toRegisterLeft}>Have an account ?</Text>
              <Pressable onPress={() => navigation.navigate('SignInScreen')}>
                <Text style={styles.dekstopUp_toRegisterRight}>Login</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.dekstopUp_right}>
            <Image source={dekstopRightBg} style={styles.dekstopUp_image} />
          </View>
        </View>
      ): (
        <View style={styles.mobileUp_view}>
          <Image source={dekstopRightBg} style={styles.mobileUp_logo} />

          <TextInput 
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={styles.mobileUp_input}
          />
          
          <TextInput 
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.mobileUp_input}
          />

          <TextInput 
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.mobileUp_input}
          />

          <Pressable 
            onPress={onSubmit}
            disabled={loading}
            style={styles.dekstopUp_login}
          >
            <Text style={styles.dekstopUp_loginText}>Register</Text>
          </Pressable>
          
          <View style={styles.dekstopUp_toRegister}>
            <Text style={styles.dekstopUp_toRegisterLeft}>Have an account ?</Text>
            <Pressable onPress={() => navigation.navigate('SignInScreen')}>
              <Text style={styles.dekstopUp_toRegisterRight}>Login</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
    
  )
}

export default SignUpScreen
