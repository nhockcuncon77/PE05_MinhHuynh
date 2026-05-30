import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import CenterMessage from '../components/CenterMessage';

export default function Country({ route, countries, addCurrency }) {
  const { countryId } = route.params;
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');

  // Find the exact real-time updated data node
  const targetCountry = countries.find((item) => item.id === countryId);

  const handleAddCurrency = () => {
    if (name.trim() === '' || info.trim() === '') return;

    addCurrency({ name: name.trim(), info: info.trim() }, countryId);
    setName('');
    setInfo('');
  };

  if (!targetCountry) return null;

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView contentContainerStyle={[!targetCountry.currencies?.length && { flex: 1 }]}>
        <View style={styles.subHeaderContainer}>
          <Text style={styles.subHeader}>Country</Text>
        </View>

        <View style={[styles.currenciesContainer, !targetCountry.currencies?.length && { flex: 1, justifyContent: 'center' }]}>
          {!targetCountry.currencies?.length ? (
            <CenterMessage message="No currencies context added yet!" />
          ) : (
            targetCountry.currencies.map((curr, index) => (
              <View key={index} style={styles.currencyItem}>
                <Text style={styles.currencyTitle}>{curr.name}</Text>
                <Text style={styles.currencySub}>{curr.info}</Text>
              </View>
            ))
          )}
        </View>
      </ScrollView>

      {/* Input Overlay Framework matching Figure 4 styling */}
      <TextInput
        placeholder="Currency name"
        placeholderTextColor="white"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Currency info"
        placeholderTextColor="white"
        value={info}
        onChangeText={setInfo}
        style={[styles.input, styles.input2]}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleAddCurrency}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Currency</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subHeaderContainer: {
    backgroundColor: '#1976D2',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  subHeader: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  currenciesContainer: {
    paddingBottom: 160,
  },
  currencyItem: {
    padding: 15,
    borderBottomColor: '#1976D2',
    borderBottomWidth: 2,
  },
  currencyTitle: {
    fontSize: 20,
  },
  currencySub: {
    color: 'rgba(0, 0, 0, .5)',
  },
  input: {
    height: 50,
    backgroundColor: '#1976D2',
    color: 'white',
    paddingHorizontal: 12,
    position: 'absolute',
    width: '100%',
    bottom: 104,
    left: 0,
    fontSize: 16,
  },
  input2: {
    bottom: 52,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.2)',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  button: {
    height: 50,
    backgroundColor: '#1565C0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});