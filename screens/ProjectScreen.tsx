import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Dimensions, Text, View, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import ProjectItem from '../components/ProjectItem';
import Colors from '../constants/Colors';

import { gql, useQuery } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { LinearTextGradient } from "react-native-text-gradient"

import styles from './Home/Styles'

const dekstopRightBg = require('../assets/images/jungle.jpg')

const windowWidth = Dimensions.get('window').width

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
    <View>
      { windowWidth > 1200 ? (
        <View style={styles.dekstopHome_view}>
          <View style={styles.dekstopHome_left}>
            <Image source={dekstopRightBg} style={styles.dekstopHome_image} />
          </View>

          <View style={styles.dekstopHome_right}>
            <Text style={styles.dekstopHome_title}>Bujang ToDo's</Text>
            {/*<LinearTextGradient
              style={styles.dekstopHome_title}
              locations={[0, 1]}
              colors={["#CB7362", "#F9F871"]}
              start={{ x: 0., y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              Bujang ToDo's
            </LinearTextGradient>*/}

            <FlatList 
              data={project}
              renderItem={({ item }) => <ProjectItem project={item} />}
              style={styles.dekstopHome_list}
            />
          </View>
          
        </View>
      ) : (
      <View style={styless.container}>
        <FlatList 
          data={project}
          renderItem={({ item }) => <ProjectItem project={item} />}
          style={{ width: '100%' }}
        />
      </View>
      ) }
    </View>
    
  );
}

const styless = StyleSheet.create({
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
