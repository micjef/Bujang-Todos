import { gql, useMutation } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, View, Pressable, Image, Alert, TextInput } from 'react-native'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const dekstopRightBg = require('../../assets/images/ilustration.png')

const CREATE_TASKLISTS = gql`
  mutation createTaskList($title: String!){
    createTaskList(title: $title){
      id
      createdAt
      title
      progress
      
      users{
        id
        name
      }
    }
  }
`

const CreateTaskList = () => {
  const [title, setTitle] = useState('')

  const navigation = useNavigation()

  const [createTaskList, { data, error, loading }] = useMutation(CREATE_TASKLISTS)

  if (error) {
    Alert.alert('Error signing up. Try again')
  }

  if (data) {
    //save token
    AsyncStorage.setItem('token', data.createTaskList.token).then(() => {
      //redirect home
      navigation.navigate('Home')
    })
  }

  const saveTaskList = () => {
    createTaskList({variables: { title }})
  }

  return (
    <View style={{backgroundColor: 'white'}}>
      { windowWidth > 1200 ? (
        <View style={styles.dekstopHome_view}>
          <View style={styles.dekstopHome_left}>
            <Image source={dekstopRightBg} style={styles.dekstopHome_image} />
          </View>

          <View style={styles.dekstopHome_right}>
            <Text style={styles.dekstopHome_title}>Bujang ToDo's</Text>

            <TextInput 
              placeholder='type here'
              value={title}
              onChangeText={setTitle}
            />

            <Pressable style={styles.dekstopHome_add} onPress={saveTaskList}>
              <Text style={styles.dekstopHome_addText}>+</Text>
            </Pressable>

          </View>

        </View>
      ) : (
        <View>
          <Text style={{ color: 'white'}}>hai</Text>
        </View>
      )}
    </View>
  )
}

export default CreateTaskList

const styles = StyleSheet.create({
  dekstopHome_view: {
    flexDirection: 'row',
  },
  dekstopHome_left: {
    width: (windowWidth -20) / 144 * 40,
    height: windowHeight - 20,
    borderWidth: 1,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    borderColor: '#F3F2F9',
    marginTop: 10,
    marginLeft: 20,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  dekstopHome_image: {
    width: (windowWidth -20) / 144 * 40 - 2,
    height: windowHeight - 22,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
  dekstopHome_right: {
    width: (windowWidth -20) / 144 * 102,
    height: windowHeight - 20,
    borderWidth: 1,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderColor: '#F3F2F9',
    marginTop: 10,
    marginRight: 10,
  },
  dekstopHome_title: {
    fontSize: 72,
    color: '#CB7362',
    marginLeft: 90,
    marginTop: 40,
  },
  dekstopHome_list: {
    width: (windowWidth -20) / 144 * 92,
    marginLeft: 40,
    marginTop: 50,
    maxHeight: 1214,
  },
  dekstopHome_add: {
    backgroundColor: '#CB7362',
    width: 80,
    height: 80,
    borderRadius: 500,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 100,
    bottom: 50,
  },
  dekstopHome_addText: {
    fontSize: 80,
    color: '#F3F2F9',
    marginTop: -15,
  },
})
