import { NavigationContainer } from '@react-navigation/native'
import * as Location from 'expo-location'
import { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import Tabs from './src/components/Tabs'

const App = () => {
  const { container } = styles
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState(null)

  useEffect(() => {
    (async() => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('Permission to access location was denied.')
        return
      }
      let location = await Location.getCurrentPositionAsync()
      setLocation(location)
    })()
  }, [])

  if (location) {
    console.log(location)
  }

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