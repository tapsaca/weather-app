import { Feather } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

const ErrorItem = () => {
  const { container, errorMessage } = styles

  return (
    <View style={container}>
      <Text style={errorMessage}>Sorry, something went wrong</Text>
      <Feather color={'black'} name={'frown'} size={100} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center'
  },
  errorMessage: {
    color: 'black',
    fontSize: 30,
    marginHorizontal: 10,
    textAlign: 'center'
  }
})

export default ErrorItem