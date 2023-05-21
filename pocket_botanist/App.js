/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import SignUpView from './views/SignUpView';
import LoginView from './views/LoginView';
import HomeView from './views/HomeView';
import EncyclopediaView from './views/EncyclopediaView';
import PlantView from './views/PlantView';
import HealthView from './views/HealthView';

const Stack = createNativeStackNavigator();

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView style={styles.sav}>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={'Sign Up'} component={SignUpView} />
          <Stack.Screen name={'Login'} component={LoginView} />
          <Stack.Screen name={'Home'} component={HomeView} />
          <Stack.Screen name={'Plant View'} component={PlantView} />
          <Stack.Screen name={'Encyclopedia'} component={EncyclopediaView} />
          <Stack.Screen name={'Health View'} component={HealthView} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sav: {
    flex: 1,
    backgroundColor: '#65882a',
  },
  nav: {
    backgroundColor: '#65882a',
  },
});

export default App;
