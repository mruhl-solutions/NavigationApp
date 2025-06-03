import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ 
        tabBarActiveTintColor: 'red',
        // headerShown: false
    }}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <FontAwesome size={30} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => <FontAwesome size={30} name="hand-paper-o" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(stack)"
        options={{
          headerShown: false,
          title: 'stack',
          tabBarIcon: ({ color }) => <FontAwesome size={30} name="sign-out" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout