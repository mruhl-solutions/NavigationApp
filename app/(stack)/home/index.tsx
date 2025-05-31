import CustomButton from '@/components/shared/CustomButton';
import { Link, router } from 'expo-router';
import React from 'react';
import { SafeAreaView, View } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView className='px-10 mt-5'>
      <View>

        <CustomButton color='primary' className='mb-2' onPress={() => router.push('/products')}>
          Products
        </CustomButton>

        <CustomButton color='secondary' className='mb-2' onPress={() => router.push('/profile')}>
          Profile
        </CustomButton>

        <CustomButton color='tertiary' className='mb-2' onPress={() => router.push('/settings')}>
          Settings
        </CustomButton>

        <Link href='/products' asChild>
            <CustomButton variant='text-only' className='mb-2' color='primary'>Productos</CustomButton>
        </Link>

      </View>
      
    </SafeAreaView>
  )
}

export default HomeScreen;