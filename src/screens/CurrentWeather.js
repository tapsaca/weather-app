import { Feather } from '@expo/vector-icons'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
  const { bodyWrapper, container, description, feels, highLow, highLowWrapper, message, tempStyles, wrapper } = styles
  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData
  const  weatherCondition = weather[0]?.main

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor }
      ]}
    >
      <View style={container}>
        <Feather name={weatherType[weatherCondition]?.icon} size={100} color='black' />
        <Text style={tempStyles}>{`${temp} °C`}</Text>
        <Text style={feels}>{`Feels like ${feels_like} °C`}</Text>
        <RowText
          containerStyles={highLowWrapper}
          messageOne={`High: ${temp_max} °C `}
          messageOneStyles={highLow}
          messageTwo={`Low: ${temp_min} °C`}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        containerStyles={bodyWrapper}
        messageOne={weather[0]?.description}
        messageOneStyles={description}
        messageTwo={weatherType[weatherCondition]?.message}
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
    fontSize: 43
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
    fontSize: 25
  },
  tempStyles: {
    color: 'black',
    fontSize: 48
  },
  wrapper: {
    flex: 1
  }
})

export default CurrentWeather