import { NavigationContainer } from '@react-navigation/native'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import Tabs from './src/components/Tabs'
import { useGetWeather } from './src/hooks/useGetWeather'

const App = () => {
  const { container } = styles
  const [error, loading, weather] = useGetWeather()

  console.log(error, loading, weather)

  if (loading) {
    return (
      <View style={container}>
        <ActivityIndicator color={'blue'} size={'large'} />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default App