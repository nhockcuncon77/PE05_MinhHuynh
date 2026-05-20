import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import CenterMessage from '../components/CenterMessage';

export default function Countries({ route }) {
  const { countries } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subHeader}>Countries</Text>
      {countries.length === 0 ? (
        <CenterMessage message="No saved countries!" />
      ) : (
        countries.map((item, index) => (
          <TouchableWithoutFeedback key={item.id || index} onPress={() => {}}>
            <View style={styles.countryContainer}>
              <Text style={styles.countryName}>{item.country}</Text>
              <Text style={styles.currencyName}>{item.currency}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
  },
  subHeader: {
    fontSize: 14,
    color: '#777',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#EAEAEA',
  },
  countryContainer: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  countryName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  currencyName: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.5)',
    marginTop: 2,
  },
});