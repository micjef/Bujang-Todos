import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import ProjectItem from '../components/ProjectItem';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

import { gql, useQuery } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'

const PROJECTS = gql`
  query myTaskLists {
    myTaskLists {
        id
        title
    }
  }
`

export default function ProjectScreens() {
  const [project, setProject] = useState([])

  const { data, error, loading } = useQuery(PROJECTS)

  useEffect(() => {
    if (error) {
      Alert.alert('Error fetching projects', error.message)
    }
  }, [error])

  useEffect(() => {
    if (data) {
      setProject(data.myTaskLists)
    }
  }, [data])

  return (
    <View style={styles.container}>
      <FlatList 
        data={project}
        renderItem={({ item }) => <ProjectItem project={item} />}
        style={{ width: '100%' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.dark.background,
  },
  root: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#404040',
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    color: Colors.dark.text,
    marginRight: 5,
  },
  time: {
    color: 'darkgrey',
  },
});
