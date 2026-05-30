import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import CenterMessage from '../components/CenterMessage';

export default function Countries({ countries, navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.subHeaderContainer}>
        <Text style={styles.subHeader}>Countries</Text>
      </View>
      {countries.length === 0 ? (
        <CenterMessage message="No saved countries!" />
      ) : (
        countries.map((item, index) => (
          <TouchableWithoutFeedback 
            key={item.id || index} 
            onPress={() => navigation.navigate('Country', { countryId: item.id })}
          >
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
    backgroundColor: '#FFFFFF',
  },
  subHeaderContainer: {
    backgroundColor: '#1976D2',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  subHeader: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  countryContainer: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 2,
    borderBottomColor: '#1976D2',
  },
  countryName: {
    fontSize: 20,
    color: '#333',
  },
  currencyName: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.5)',
    marginTop: 2,
  },
});