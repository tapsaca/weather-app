import { NavigationContainer } from '@react-navigation/native'
import * as Location from 'expo-location'
import { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import Tabs from './src/components/Tabs'
import { WEATHER_API_KEY } from '@env'

const App = () => {
  const { container } = styles
  const [error, setError] = useState(null)
  const [latitude, setLatitude] = useState([])
  const [loading, setLoading] = useState(true)
  const [longitude, setLongitude] = useState([])
  const [weather, setWeather] = useState([])

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`
      )
      const data = await response.json()
      setWeather(data)
    } catch (e) {
      setError('Could not fetch weather.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('Permission to access location was denied.')
        return
      }
      let location = await Location.getCurrentPositionAsync()
      setLatitude(location.coords.latitude)
      setLongitude(location.coords.longitude)
      await fetchWeatherData()
    })()
  }, [latitude, longitude])

  if (weather) {
    console.log(weather)
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