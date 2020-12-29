import { StatusBar } from 'expo-status-bar';
import React, { useState}  from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [outputText, setOutputText] = useState('this is a test');

  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Change Text!" onPress={() => setOutputText('The Text Ccfghhanged')}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
