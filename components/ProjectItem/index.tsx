import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

interface ProjectItemProps{
  project: {
    id: String,
    title: String,
    createdAt: String,
  }
}

const ProjectItem = ( { project }: ProjectItemProps ) => {
  const navigation = useNavigation()

  const onPress = () => {
    //console.warn(`open project ${project.title}`);
    navigation.navigate('ToDoScreen', {id: project.id})
  }

  return (
    <Pressable onPress={onPress} style={styles.root}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name='file-outline' size={24} color='grey' />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'none' }}>
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.time}>{project.createdAt}</Text>
      </View>
    </Pressable>
  )
}

export default ProjectItem
