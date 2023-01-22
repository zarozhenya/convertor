import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {CurrencyItem} from '../../api/currency';
import {styles} from './styles';

function Picker({items}: {items: CurrencyItem[]}): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');
  return (
    <DropDownPicker
      style={styles.picker}
      textStyle={styles.text}
      arrowIconStyle={styles.icon}
      tickIconStyle={styles.icon}
      containerStyle={styles.picker}
      dropDownContainerStyle={styles.picker}
      open={open}
      value={selectedCurrency}
      items={items}
      setOpen={setOpen}
      setValue={setSelectedCurrency}
    />
  );
}

export default Picker;
