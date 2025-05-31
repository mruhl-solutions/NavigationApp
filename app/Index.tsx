import { Redirect } from "expo-router"

const App = () => {

  //Lanzar la pantalla cuando se inicia
  return <Redirect href='/(stack)/home' />

  // return (
  //   <SafeAreaView>
  //     <View className='mt-20 mx-6'>

  //       <Text className='text-5xl' style={{fontFamily: 'WorkSans-Black'}}>Hola Mundo!</Text>
  //       <Text className='text-4xl font-work-black text-primary'>Hola Mundo!</Text>
  //       <Text className='text-3xl font-work-medium text-secondary-100'>Hola Mundo!</Text>
  //       <Text className='text-2xl font-work-light text-secondary-200'>Hola Mundo!</Text>
  //       <Text className='text-xl text-tertiary'>Hola Mundo!</Text>

  //       <Link href='/products'>
  //         Productos
  //       </Link>

  //     </View>
  //   </SafeAreaView>
  // )
}

export default App