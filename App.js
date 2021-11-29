import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image
        source={{
          uri: 'https://picsum.photos/200/300',
          width: 200,
          height: 300,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
