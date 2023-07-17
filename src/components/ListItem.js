import { Feather } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

const ListItem = ({ dt_txt, min, max, condition}) => {
  const { date, item, temp } = styles

  return (
    <View style={item}>
      <Feather color={'black'} name={'sun'} size={50} />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  date: {
    color: 'black',
    fontSize: 15
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

export default ListItem