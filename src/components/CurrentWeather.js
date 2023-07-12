import { Feather } from '@expo/vector-icons'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name='sun' size={100} color='black' />
        <Text style={styles.temp}>7</Text>
        <Text style={styles.feels}>Feels like 6</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 9 </Text>
          <Text style={styles.highLow}>Low: 7</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Description</Text>
        <Text style={styles.message}>Message</Text>
      </View>
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