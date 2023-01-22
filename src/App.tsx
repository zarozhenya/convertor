import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {currencies} from './api/currency';
import GradientBackground from './components/GradientBackground/GradientBackground';

import Picker from './components/Picker/Picker';

function App(): JSX.Element {
  return (
    <GradientBackground
      colors={['#3A41C6', '#3D3BBB', '#4634A7', '#4C2C96', '#512888']}
      start={{x: 0, y: 0}}>
      <SafeAreaView style={styles.flex}>
        <View style={styles.container}>
          <Picker items={currencies} />
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 8,
  },
});
export default App;
