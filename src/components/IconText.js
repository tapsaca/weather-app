import { Feather } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

const IconText = ({ iconColor, iconName, text, textStyles }) => {
  const { container, textTheme } = styles

  return(
    <View style={container} >
      <Feather color={iconColor} name={iconName} size={50} />
      <Text style={[textStyles, textTheme]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  textTheme: {
    fontWeight: 'bold'
  }
})

export default IconText