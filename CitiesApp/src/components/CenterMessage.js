import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CenterMessage({ message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.emptyMessage}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  emptyMessage: {
    fontSize: 18,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.5)',
  },
});