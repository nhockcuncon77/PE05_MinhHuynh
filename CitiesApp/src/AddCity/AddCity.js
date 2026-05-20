import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import uuid from 'react-native-uuid';
import { colors } from '../theme';

export default function AddCity({ route, navigation }) {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const { addCity } = route.params;

  const submit = () => {
    if (city.trim() === '' || country.trim() === '') {
      alert('Please fill out both fields!');
      return;
    }
    
    const newCity = {
      city: city.trim(),
      country: country.trim(),
      id: uuid.v4(),
    };

    addCity(newCity);
    setCity('');
    setCountry('');
    
    // Smoothly redirect user back to the primary viewing tab
    navigation.navigate('CitiesNav');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Cities</Text>
        <TextInput
          placeholder="City name"
          placeholderTextColor="#A0A0A0"
          value={city}
          onChangeText={setCity}
          style={styles.input}
        />
        <TextInput
          placeholder="Country name"
          placeholderTextColor="#A0A0A0"
          value={country}
          onChangeText={setCountry}
          style={styles.input}
        />
        <TouchableOpacity onPress={submit} style={styles.button}>
          <Text style={styles.buttonText}>Add City</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: colors.primary,
    width: '90%',
    padding: 25,
    borderRadius: 4,
    alignItems: 'center',
    elevation: 4,
  },
  heading: {
    fontSize: 32,
    color: '#FFFFFF',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 50,
    paddingHorizontal: 12,
    marginBottom: 15,
    borderRadius: 4,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#555555',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});