import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import ProjectItem from '../components/ProjectItem';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

export default function ProjectScreens() {
  const [project, setProject] = useState([
    {
      id: '1',
      title: 'Project 1',
      createdAt: '2d',
    }, {
      id: '2',
      title: 'Project 2',
      createdAt: '2d',
    }, {
      id: '3',
      title: 'Project 3',
      createdAt: '2d',
    },
  ])
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
    backgroundColor: 'none',
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
