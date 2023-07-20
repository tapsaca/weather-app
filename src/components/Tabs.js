import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import City from '../screens/City'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'lightblue'
        },
        headerTitleStyle: {
          color: 'black',
          fontSize: 25,
          fontWeight: 'bold'
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'lightblue',
        }
      }}
    >
      <Tab.Screen
        component={CurrentWeather}
        name={'Current'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              color={focused ? 'white' : 'black'}
              name={'droplet'}
              size={25} 
            />
          )
        }}
      />
      <Tab.Screen
        component={UpcomingWeather}
        name={'Upcoming'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              color={focused ? 'white' : 'black'}
              name={'droplet'}
              size={25} 
            />
          )
        }}
      />
      <Tab.Screen
        component={City}
        name={'City'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              color={focused ? 'white' : 'black'}
              name={'home'}
              size={25}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs