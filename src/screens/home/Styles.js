import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  categoryTitle: {
    color: 'black',
  },
  categoryCard: {
    backgroundColor: 'white',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
  },
  categoryContainer: {
    height: 50,
    marginTop: 10,
  },
  productList: {
    flex: 1,
  },
  addButton: {
    backgroundColor: '#f0f0f0',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    right: 15,
    elevation: 5,
  },
});

export default Styles;
