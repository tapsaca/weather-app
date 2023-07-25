import * as Location from 'expo-location'
import { useEffect, useState } from 'react'
import { WEATHER_API_KEY } from '@env'

export const useGetWeather = () => {
  const [error, setError] = useState(null)
  const [latitude, setLatitude] = useState([])
  const [loading, setLoading] = useState(true)
  const [longitude, setLongitude] = useState([])
  const [weather, setWeather] = useState([])

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
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

  return [error, loading, weather]
}