import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Images from '../constants/Images';
import IconButton from './IconButton';

const Header = props => {
  const {title, goBack, goSearch} = props;
  return (
    <View style={Styles.container}>
      <View style={Styles.backTitleView}>
        {goBack ? (
          <IconButton source={Images.ic_back} onPress={goBack} />
        ) : null}
        <Text style={Styles.title}>{title}</Text>
      </View>
      {goSearch ? (
        <IconButton
          source={Images.ic_search}
          onPress={() => console.log('search pressed')}
        />
      ) : null}
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: 'black',
    marginLeft: 10,
  },
  backTitleView: {
    flexDirection: 'row',
  },
});

export default Header;
