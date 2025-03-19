import React from 'react';
import { Image } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from '../app/screens/auth/Splash';
import SignIn from '../app/screens/auth/SignIn';
import SignUp from '../app/screens/auth/SignUp';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors } from './utils/colors';  

import Home from '../app/screens/app/Home';
import Favorites from '../app/screens/app/Favorites';
import Profile from '../app/screens/app/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === 'Home') {
            icon = focused
              ? require('../assets/tabs/home_active.png')
              : require('../assets/tabs/home.png');
          } else if (route.name === 'Favorites') {
            icon = focused
              ? require('../assets/tabs/bookmark_active.png')
              : require('../assets/tabs/bookmark.png');
          } else if (route.name === 'Profile') {
            icon = focused
              ? require('../assets/tabs/profile_active.png')
              : require('../assets/tabs/profile.png');
          }

          return <Image style={{width: 24, height: 24}} source={icon} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {borderTopColor: colors.lightGray}
        
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const App = () => {
    const theme = {
      ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
            background: colors.white,
        },
    };
    const isSignedIn = true;
  return (
    <SafeAreaProvider>
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        {
          isSignedIn ? (
            <>
            <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}} />
            </>
          ) : (
            <>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            </>
          )
        }

      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;