import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Pressable, Dimensions } from 'react-native'
import styles from './styles'

const windowWidth = Dimensions.get('window').width

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
     <View>
      { windowWidth > 1200 ? (
        <Pressable style={styles.dekstopHome_box} onPress={onPress} >
          <View style={styles.dekstopHome_info} >
            <Text style={styles.dekstopHome_lead}>{project.title}</Text>
            <Text style={styles.dekstopHome_time}>{/*project.createdAt*/}wednesday</Text>
          </View>

          <View style={styles.dekstopHome_progressBox}>
            <View style={styles.dekstopHome_progressFill}></View>
            <Text style={styles.dekstopHome_progressText}>50%</Text>
          </View>
        </Pressable>
      ) : (
        <Pressable onPress={onPress}>
          <View>
            <MaterialCommunityIcons name='file-outline' size={24} color='grey' />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'none' }}>
            <Text>{project.title}</Text>
            <Text>{project.createdAt}</Text>
          </View>
        </Pressable>
      )}
     </View>
    
  )
}

export default ProjectItem
