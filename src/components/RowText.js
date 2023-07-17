import { Text, View } from 'react-native'

const RowText = ({ containerStyles, messageOne, messageOneStyles, messageTwo, messageTwoStyles }) => {
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  )
}

export default RowText