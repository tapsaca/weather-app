import { Feather } from '@expo/vector-icons'
import moment from 'moment'
import { StyleSheet, Text, View } from 'react-native'
import { weatherType } from '../utilities/weatherType'

const ListItem = ({ dt_txt, min, max, condition}) => {
  const { date, dateTextWrapper, item, temp } = styles

  return (
    <View style={item}>
      <Feather color={'black'} name={weatherType[condition].icon} size={50} />
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)} °C / ${Math.round(max)} °C`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  date: {
    color: 'black',
    fontSize: 15
  },
  dateTextWrapper: {
    flexDirection: 'column'
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