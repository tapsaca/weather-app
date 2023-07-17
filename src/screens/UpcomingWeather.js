import { FlatList, ImageBackground, SafeAreaView, StyleSheet, Text } from 'react-native'
import ListItem from '../components/ListItem'

const DATA = [
  {
    dt_txt: '2023-07-14 12:00:00',
    main: {
      temp_max: 22.77,
      temp_min: 21.77
    },
    weather : [
      {
        main: 'Clear'
      }
    ]
  },
  {
    dt_txt: '2023-07-14 15:00:00',
    main: {
      temp_max: 22.77,
      temp_min: 21.77
    },
    weather: [
      {
        main: 'Clear'
      }
    ]
  },
  {
    dt_txt: '2023-07-14 18:00:00',
    main: {
      temp_max: 22.77,
      temp_min: 21.77
    },
    weather: [
      {
        main: 'Clear'
      }
    ]
  }
]

const UpcomingWeather = () => {
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
        <Text>Upcoming Weather</Text>
        <FlatList
          data={DATA}
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