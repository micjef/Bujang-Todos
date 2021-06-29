import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import ProjectScreens from '../screens/ProjectScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SplashScreen from '../screens/SplashScreen';
import ToDoScreen from '../screens/ToDoScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={/*colorScheme === 'dark' ? DarkTheme : DefaultTheme*/ DarkTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      {/*<Stack.Screen 
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown: false
        }}
      />*/}
      <Stack.Screen 
        name="SignInScreen" 
        component={SignInScreen} 
        options={{
          //title: "Sign In"
          headerShown: false
        }}
      />
      <Stack.Screen 
        name="SignUpScreen" 
        component={SignUpScreen} 
        options={{
          //title: "Sign Up"
          headerShown: false
        }}
      />
      {/*<Stack.Screen name="Home" component={ProjectScreens} />
      <Stack.Screen name="ToDoScreen" component={ToDoScreen} />*/}
      {/*<Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />*/}
    </Stack.Navigator>
  );
}
