import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet,Image} from 'react-native';
import NavigationService from '../navigation/NavigationService';
import {getWidth} from '../utils/Utils';

const ProductItem = props => {
  const {item,index} = props;

  const _navigateToDetails = () => {
    NavigationService.navigate('ProductDetails',{id:item._id});
  };

  return (
    <TouchableOpacity
      style={Styles.container}
      onPress={_navigateToDetails}
      activeOpacity={0.5}>
        <Image source={{uri:item.avatar}} style={{width:'100%',height:150}}/>
        <View >
        <Text style={{color:'black',fontSize:18}}> {item.name}</Text>
         <Text style={{paddingLeft:5}}>${item.price}</Text>
        </View>
     
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: getWidth(45),
    // height: 200,
    marginHorizontal: getWidth(2.5),
    marginVertical: 10,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 10,
  },
});

export default ProductItem;
