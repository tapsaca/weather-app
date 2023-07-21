import { Feather } from '@expo/vector-icons'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/WeatherType'

const CurrentWeather = () => {
  const { bodyWrapper, container, description, feels, highLow, highLowWrapper, message, temp, wrapper } = styles

  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name='sun' size={100} color='black' />
        <Text style={temp}>7</Text>
        <Text style={feels}>Feels like 6</Text>
        <RowText containerStyles={highLowWrapper} messageOne={'High: 9'} messageOneStyles={highLow} messageTwo={'Low: 7'} messageTwoStyles={highLow} />
      </View>
      <RowText
        containerStyles={bodyWrapper}
        messageOne={'Description'}
        messageOneStyles={description}
        messageTwo={weatherType['Thunderstorm'].message}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bodyWrapper: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginBottom: 40,
    paddingLeft: 25
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  description: {
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  message: {
    fontSize: 30
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  wrapper: {
    backgroundColor: 'yellow',
    flex: 1
  }
})

export default CurrentWeather