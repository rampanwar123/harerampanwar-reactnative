import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

const IconButton = props => {
  const {source, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={source} style={Styles.image} />
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
  },
});

export default IconButton;
