import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import "../global.css"



const App = () => {
    return (
      <SafeAreaProvider>
          <RootNavigation />
          <StatusBar style='auto' />
      </SafeAreaProvider>
    )
}

const RootNavigation = () => {
    return (
      <Stack initialRouteName='(login)'>
        <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
        <Stack.Screen name='(login)' options={{headerShown: false}}/>
        <Stack.Screen name='(registration)' options={{headerShown: false}}/>
      </Stack>
    )
}

export default App