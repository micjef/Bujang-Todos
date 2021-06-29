import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, Alert, Image, Dimensions } from 'react-native'

import { useMutation, gql } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './SignIn/Styles'

const dekstopRightBg = require('../assets/images/jungle.jpg')

const windowWidth = Dimensions.get('window').width

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

  const onSubmit = () => {
    signIn({variables: { email, password }})
  }

  return (
    <View>
      { windowWidth > 1200 ? (
        <View style={styles.dekstopIn_view}>
          <View style={styles.dekstopIn_left}>
            <Image source={dekstopRightBg} style={styles.dekstopIn_logo} />

            <TextInput 
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={styles.dekstopIn_input}
            />

            <TextInput 
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.dekstopIn_input}
            />

            <Pressable 
              onPress={onSubmit}
              disabled={loading}
              style={styles.dekstopIn_login}
            >
              <Text style={styles.dekstopIn_loginText}>Login</Text>
            </Pressable>
            
            <View style={styles.dekstopIn_toRegister}>
              <Text style={styles.dekstopIn_toRegisterLeft}>Don’t have account ?</Text>
              <Pressable onPress={() => navigation.navigate('SignUpScreen')}>
                <Text style={styles.dekstopIn_toRegisterRight}>Register</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.dekstopIn_right}>
            <Image source={dekstopRightBg} style={styles.dekstopIn_image} />
          </View>
        </View>
      ) : (
        <View style={styles.mobileIn_view}>
            <Image source={dekstopRightBg} style={styles.mobileIn_logo} />

            <TextInput 
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={styles.mobileIn_input}
            />

            <TextInput 
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.mobileIn_input}
            />

            <Pressable 
              onPress={onSubmit}
              disabled={loading}
              style={styles.dekstopIn_login}
            >
              <Text style={styles.dekstopIn_loginText}>Login</Text>
            </Pressable>
            
            <View style={styles.mobileIn_toRegister}>
              <Text style={styles.mobileIn_toRegisterLeft}>Don’t have account ?</Text>
              <Pressable onPress={() => navigation.navigate('SignUpScreen')}>
                <Text style={styles.mobileIn_toRegisterRight}>Register</Text>
              </Pressable>
            </View>
          
        </View>
      )}
    </View>
    
    
  )
}

export default SignInScreen
