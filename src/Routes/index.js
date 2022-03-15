import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from '../Pages/FirstScreen';
import Login from '../Pages/Login';
import CreateAccount from '../Pages/CreateAccount';


  const Stack = createStackNavigator();
  
  function Routes() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
          <Stack.Screen name="First" component={FirstScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Criar conta" component={CreateAccount} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Routes;