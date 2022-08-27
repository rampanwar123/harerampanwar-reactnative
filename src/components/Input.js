import React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';

const Input = props => {
  const {placeholder, value, onChangeText, textInputStyle, error} = props;
  return (
    <View style={Styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={[Styles.input, textInputStyle]}
      />
      {error ? <Text style={Styles.error}>error</Text> : null}
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {marginHorizontal:10,borderRadius:5,elevation:5,backgroundColor:'white',marginVertical:5},
  input: {
    height: 40,
    // backgroundColor: 'blue',
    borderRadius:5
  },
  error: {
    color: 'red',
  },
});

export default Input;
