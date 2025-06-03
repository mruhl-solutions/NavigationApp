import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const ProductScreem = () => {

    const { id } = useLocalSearchParams();
    const product = products.find(it => it.id === id);

    if(!product)
        return <Redirect href={'/'}></Redirect>

  return (
    <View className='px-5 mt-2'>
        <Text className='font-work-black text-2xl'>{product.title}</Text>  
        <Text>{product.description}</Text>  
        <Text className='font-work-black'>{product.price}</Text>  
    </View>
  )
}

export default ProductScreem