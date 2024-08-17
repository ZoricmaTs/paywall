/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {PaywallScene} from './src/scenes/Paywall.tsx';
import {RegularScene} from './src/scenes/Regular.tsx';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    // <SafeAreaView>
      <NavigationContainer >
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Paywall" component={PaywallScene}/>
            <Stack.Screen name="Regular" component={RegularScene}/>
        </Stack.Navigator>
      </NavigationContainer>
    //
  );
}

export default App;
