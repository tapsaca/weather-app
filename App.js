import { StyleSheet, View } from 'react-native'
import CurrentWeather from './src/components/CurrentWeather'

const App = () => {
  return (
    <View style={styles.container}>
      <CurrentWeather />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App