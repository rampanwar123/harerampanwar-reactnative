import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const getWidth = (value = 0) => {
  var wi = (width * value) / 100;
  return wi;
};

export const getHeight = (value = 0) => {
  var hei = (height * value) / 100;
  return hei;
};
