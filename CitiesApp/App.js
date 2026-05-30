import React, { useState } from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screen components
import Cities from './src/Cities/Cities';
import AddCity from './src/AddCity/AddCity';
import Countries from './src/Countries/Countries';
import Country from './src/Countries/Country'; // New detail screen
import AddCountry from './src/AddCountry/AddCountry';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack Navigator for the Countries tab hierarchy
function CountriesStackScreen({ countries, addCurrency }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#FFFFFF' },
        headerTintColor: '#000000',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="CountriesNav" options={{ title: 'CountriesNav' }}>
        {(props) => <Countries {...props} countries={countries} />}
      </Stack.Screen>
      <Stack.Screen name="Country" options={{ title: 'Country' }}>
        {(props) => <Country {...props} countries={countries} addCurrency={addCurrency} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default function App() {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);

  const addCity = (newCity) => {
    setCities((prev) => [...prev, newCity]);
  };

  const addCountry = (newCountry) => {
    // Ensure every new country initializes with an empty currencies array
    setCountries((prev) => [...prev, { ...newCountry, currencies: [] }]);
  };

  const addCurrency = (currency, countryId) => {
    setCountries((prevCountries) =>
      prevCountries.map((c) =>
        c.id === countryId
          ? { ...c, currencies: [...(c.currencies || []), currency] }
          : c
      )
    );
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
          <Tab.Screen
            name="CitiesNav"
            component={Cities}
            options={{ title: 'CitiesNav' }}
            initialParams={{ cities, addCity }}
          />
          <Tab.Screen
            name="AddCity"
            component={AddCity}
            options={{ title: 'AddCity' }}
            initialParams={{ cities, addCity }}
          />

          {/* Countries Tabs */}
          <Tab.Screen
            name="Countries"
            options={{ title: 'CountriesNav', headerShown: false }}
          >
            {() => <CountriesStackScreen countries={countries} addCurrency={addCurrency} />}
          </Tab.Screen>
          
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