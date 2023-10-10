import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './src/screens/SignIn';
import Register from './src/screens/Register';
import { NavigationContainer } from '@react-navigation/native';
import ForgotPassword from './src/screens/ForgotPassword';
import Dashboard from './src/screens/Dashboard';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
        <Stack.Screen name='Dashboard' component={Dashboard}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
