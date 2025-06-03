import CustomButton from '@/components/shared/CustomButton';
import { router } from 'expo-router';
import React from 'react';
import { SafeAreaView, View } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView className='px-10 mt-5'>
      <View>

        <CustomButton color='primary' className='mb-2' onPress={() => router.push('/tabs/(stack)/products')}>
          Productos
        </CustomButton>

        <CustomButton color='secondary' className='mb-2' onPress={() => router.push('/tabs/(stack)/profile')}>
          Perfil
        </CustomButton>

        <CustomButton color='tertiary' className='mb-2' onPress={() => router.push('/tabs/(stack)/settings')}>
          Ajustes
        </CustomButton>

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;