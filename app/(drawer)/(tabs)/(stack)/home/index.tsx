import CustomButton from '@/components/shared/CustomButton';
import { DrawerActions } from '@react-navigation/native';
import { router, useNavigation } from 'expo-router';
import React from 'react';
import { SafeAreaView, View } from 'react-native';

const HomeScreen = () => {

  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  }

  return (
    <SafeAreaView className='px-10 mt-5'>
      <View>

        <CustomButton color='primary' className='mb-2' onPress={() => router.push('/products')}>
          Productos
        </CustomButton>

        <CustomButton color='secondary' className='mb-2' onPress={() => router.push('/profile')}>
          Perfil
        </CustomButton>

        <CustomButton color='tertiary' className='mb-2' onPress={() => router.push('/settings')}>
          Ajustes
        </CustomButton>

        <CustomButton color='tertiary' className='mb-2' onPress={() => onToggleDrawer()}>
          Ver Menú
        </CustomButton>

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;