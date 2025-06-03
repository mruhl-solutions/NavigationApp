import CustomDrawer from '@/components/shared/CustomDrawer';
import { FontAwesome } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import React from 'react';

const DrawerLayout = () => {
  return (
    <Drawer 
      drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor: 'rgba(0,0,0,0.6)',
        drawerActiveTintColor: 'red',
        headerShadowVisible: false,
        sceneStyle: {
          backgroundColor: 'white'
        }
      }}
    >
        <Drawer.Screen
          name="user/index"
          options={{
            drawerLabel: 'Usuario',
            title: 'Usuario',
            drawerIcon: ({ color, size }) => (
              <FontAwesome name='user-circle-o' color={color} size={size} />
            )
          }}
        />
        <Drawer.Screen
          name="schedule/index"
          options={{
            drawerLabel: 'Horario',
            title: 'Horario',
            drawerIcon: ({ color, size }) => (
              <FontAwesome name='calendar-o' color={color} size={size} />
            )
          }}
        />
    </Drawer>
  )
}

export default DrawerLayout