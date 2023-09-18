import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'; // Import gestureHandlerRootHOC

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: 'Home',
            headerTitle: 'Home',
          }}
        />
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{
            title: 'Second',
            headerTitle: 'Second'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Wrap the App component with gestureHandlerRootHOC
export default gestureHandlerRootHOC(App);