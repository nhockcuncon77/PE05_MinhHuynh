import React, { useState } from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import all screen components
import Cities from './src/Cities/Cities';
import AddCity from './src/AddCity/AddCity';
import Countries from './src/Countries/Countries';
import AddCountry from './src/AddCountry/AddCountry';

const Tab = createBottomTabNavigator();

export default function App() {
  // Global States
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);

  // State Management Functions
  const addCity = (newCity) => {
    setCities((prev) => [...prev, newCity]);
  };

  const addCountry = (newCountry) => {
    setCountries((prev) => [...prev, newCountry]);
  };

  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#FFFFFF' },
            headerTintColor: '#000000',
            headerTitleStyle: { fontWeight: 'bold' },
            tabBarActiveTintColor: '#1976D2',
            tabBarInactiveTintColor: '#777777',
            tabBarStyle: { backgroundColor: '#FFFFFF' },
          }}
        >
          {/* Cities Tabs */}
          {/* <Tab.Screen
            name="CitiesNav"
            component={Cities}
            options={{ title: 'Cities' }}
            initialParams={{ cities, addCity }}
          />
          <Tab.Screen
            name="AddCity"
            component={AddCity}
            options={{ title: 'AddCity' }}
            initialParams={{ cities, addCity }}
          /> */}

          {/* New Countries Tabs */}
          <Tab.Screen
            name="Countries"
            component={Countries}
            options={{ title: 'Countries' }}
            initialParams={{ countries, addCountry }}
          />
          <Tab.Screen
            name="AddCountry"
            component={AddCountry}
            options={{ title: 'AddCountry' }}
            initialParams={{ countries, addCountry }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}