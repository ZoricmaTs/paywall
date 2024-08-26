/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {PaywallScene} from './src/scenes/Paywall.tsx';
import {RegularScene} from './src/scenes/Regular.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ScreenshotScene} from './src/scenes/Screenshot.tsx';
import {HistoryScene} from './src/scenes/History.tsx';
import {TipsScene} from './src/scenes/Tips.tsx';
import {BlogScene} from './src/scenes/Blog.tsx';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    // <SafeAreaView>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer >
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Paywall" component={PaywallScene}/>
          <Stack.Screen name="Regular" component={RegularScene}/>
          <Stack.Screen name="Screenshot" component={ScreenshotScene}/>
          <Stack.Screen name="History" component={HistoryScene}/>
          <Stack.Screen name="Tips" component={TipsScene}/>
          <Stack.Screen name="Blog" component={BlogScene}/>
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
    //
  );
}

export default App;
