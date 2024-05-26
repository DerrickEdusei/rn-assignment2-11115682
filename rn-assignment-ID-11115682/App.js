import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        My name is <Text style={styles.bold}>Edusei Derrick Akuamoah</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6', 
    justifyContent: 'center',
  },
  text: {
    fontSize: 24, 
  },
  bold: {
    fontWeight: 'bold',
 },
});
