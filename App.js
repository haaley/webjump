import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Popular from './src/pages/Popular';
import Trending from './src/pages/Trending';

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Trending') {
              iconName = focused ? 'star-rate' : 'star-outline';
            } else if (route.name === 'Popular') {
              iconName = focused ? 'favorite' : 'favorite-outline';
            }

            return <Icon name={iconName} size={30} color="#900" />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="Trending"
          component={Trending}
          options={{
            title: 'Trending',
          }}
        />
        <Tab.Screen
          name="Popular"
          component={Popular}
          options={{
            title: 'Popular',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
