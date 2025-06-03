import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const ProductScreem = () => {
  const { id } = useLocalSearchParams();
  const product = products.find(it => it.id === id);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? 'Producto'
    })
  }, [product])

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