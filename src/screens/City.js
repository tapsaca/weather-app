import moment from 'moment'
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import IconText from '../components/IconText'

const City = ({ weatherData }) => {
  const { cityName, cityText, container, countryName, imageLayout, populationText, populationWrapper, riseSetText, riseSetWrapper, rowLayout } = styles
  const { country, name, population, sunrise, sunset} = weatherData

  return (
    <SafeAreaView style={container}>
      <ImageBackground source={require('../../assets/city-background.jpg')} style={imageLayout}>
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[cityText, countryName]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconColor={'black'}
            iconName={'user'}
            text={`Population: ${population}`}
            textStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconColor={'black'}
            iconName={'sunrise'}
            text={moment(sunrise).format('h:mm:ss a')}
            textStyles={riseSetText}
          />
          <IconText
            iconColor={'black'}
            iconName={'sunset'}
            text={moment(sunset).format('h:mm:ss a')}
            textStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  cityName: {
    fontSize: 40
  },
  cityText: {
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
    justifyContent: 'center'
  },
  container: {
    flex: 1
  },
  countryName: {
    fontSize: 30
  },
  imageLayout: {
    flex: 1
  },
  populationText: {
    color: 'black',
    fontSize: 25,
    marginLeft: 7.5
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30
  },
  riseSetText: {
    color: 'black',
    fontSize: 20,
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  rowLayout: {
    alignItems: 'center',
    flexDirection: 'row'
  }
})

export default City