import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import CenterMessage from '../components/CenterMessage';

export default function Cities({ route }) {
  const { cities } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subHeader}>Cities</Text>
      {cities.length === 0 ? (
        <CenterMessage message="No saved cities!" />
      ) : (
        cities.map((item, index) => (
          <TouchableWithoutFeedback key={item.id || index} onPress={() => {}}>
            <View style={styles.cityContainer}>
              <Text style={styles.cityName}>{item.city}</Text>
              <Text style={styles.countryName}>{item.country}</Text>
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
  cityContainer: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  cityName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  countryName: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.5)',
    marginTop: 2,
  },
});