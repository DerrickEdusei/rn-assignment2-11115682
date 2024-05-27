import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        My name is <Text style={styles.bold}>Derrick Edusei</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008080', 
    justifyContent: 'center',
  },
  text: {
    fontSize: 24, 
  },
  bold: {
    fontWeight: 'bold',
 },
});
