import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import City from './src/screens/City'
import CurrentWeather from './src/screens/CurrentWeather'
import UpcomingWeather from './src/screens/UpcomingWeather'

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray'
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
    </NavigationContainer>
  )
}

export default App