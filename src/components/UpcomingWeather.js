import { Feather } from '@expo/vector-icons'
import { FlatList, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'

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

const Item = ({ dt_txt, min, max, condition}) => {
  return (
    <View style={styles.item}>
      <Feather color={'black'} name={'sun'} size={50} />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      max={item.main.temp_max}
      min={item.main.temp_min}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/upcoming-background.jpg')}
        style={styles.image}
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
  date: {
    color: 'black',
    fontSize: 15
  },
  image: {
    flex: 1
  },
  item: {
    alignItems: 'center',
    backgroundColor: 'yellow',
    borderWidth: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 20
  },
  temp: {
    color: 'black',
    fontSize: 20
  }
})

export default UpcomingWeather