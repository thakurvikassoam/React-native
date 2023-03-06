import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  console.log("Hello");
  return (
    
    <View style={styles.container}>
    <Text>You clicked {count} times</Text>
    <Button
      onPress={() => setCount(count + 1)}
      title="Click me!"
    />
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
