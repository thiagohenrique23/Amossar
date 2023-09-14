import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { BackHandler, StyleSheet, Text, View } from 'react-native';

export default function Home() {

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text>XD</Text>
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
