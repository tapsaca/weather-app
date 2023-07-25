import { FlatList, ImageBackground, SafeAreaView, StyleSheet } from 'react-native'
import ListItem from '../components/ListItem'

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      max={item.main.temp_max}
      min={item.main.temp_min}
    />
  )

  const { container, image } = styles

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/upcoming-background.jpg')}
        style={image}
      >
        <FlatList
          data={weatherData}
          keyExtractor={(item) => item.dt_txt}
          renderItem={renderItem}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightskyblue',
    flex: 1,
  },
  image: {
    flex: 1
  },
})

export default UpcomingWeather