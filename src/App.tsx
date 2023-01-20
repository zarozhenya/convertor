import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {currencies} from './api/currency';

import Config from 'react-native-config';

function App(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Text>{Config.API_URL}</Text>
        <Text>{Config.API_KEY}</Text>
        <DropDownPicker
          style={styles.picker}
          containerStyle={styles.picker}
          dropDownContainerStyle={styles.picker}
          open={open}
          value={selectedCurrency}
          items={currencies}
          setOpen={setOpen}
          setValue={setSelectedCurrency}
        />
      </View>
    </SafeAreaView>
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
  picker: {
    width: 100,
    borderColor: 'red',
    borderRadius: 15,
  },
});
export default App;
