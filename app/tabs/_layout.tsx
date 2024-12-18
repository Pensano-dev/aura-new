import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '../src/components/navigation/TabBarIcon' ;

import { Colors } from '../src/constants/Colors';
import { useColorScheme } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="facilities"
        options={{
          title: 'Facilities',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
    </NavigationContainer>
  );
}
