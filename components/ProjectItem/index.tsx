import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import moment from 'moment'
import React from 'react'
import { View, Text, Pressable, Dimensions } from 'react-native'
import styles from './styles'

const windowWidth = Dimensions.get('window').width

interface ProjectItemProps{
  project: {
    id: string,
    title: string,
    createdAt: string,
    progress: number,
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
            <Text style={styles.dekstopHome_time}>{moment(project.createdAt).fromNow()}</Text>
          </View>

          <View style={styles.dekstopHome_progressBox}>
            <View style={[styles.dekstopHome_progressFill, {width: (project.progress) * 2}]}></View>
            <Text style={styles.dekstopHome_progressText}>{(project.progress).toFixed(0)}%</Text>
          </View>
        </Pressable>
      ) : (
        <Pressable onPress={onPress}>
          <View>
            <MaterialCommunityIcons name='file-outline' size={24} color='grey' />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'none' }}>
            <Text>{project.title}</Text>
            <Text>{moment(project.createdAt).fromNow()}</Text>
          </View>
        </Pressable>
      )}
     </View>
    
  )
}

export default ProjectItem
