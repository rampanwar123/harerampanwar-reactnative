import React, {useState, useEffect} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View,ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Styles from './Styles';
import Header from '../../components/Header';
import ProductItem from '../../components/ProductItem';
import Images from '../../constants/Images';
import IconButton from '../../components/IconButton';
import NavigationService from '../../navigation/NavigationService';
import Axios from 'axios';
import Constants from '../../constants/Constants';


const Home = () => {
const [productsList,setProductList] =useState([])
const [loading,setLoading] =useState(false)
const [categoryData, setCategoryData] = useState([]);
const [filterData,setFilterData]=useState([])
const [isCategory,setIsCategory]=useState(false)


  useEffect(() => {
    getCategory()
    getproducts();
  }, []);

  const getproducts =  () => {
    var config = {
      method: 'get',
      url: 'https://upayments-studycase-api.herokuapp.com/api/products',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhbXBhbndhcjQ3NjNAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL3JhbXBhbndhcjEyMyIsImlhdCI6MTY2MTU0MjE4OSwiZXhwIjoxNjYxOTc0MTg5fQ.uVPUry245XkfAyIxK4Xq0Q4DgIXn_Qkxak1oeWOErLI',
      },
    };
    setLoading(true)

   Axios(config)
      .then(function (response) {
        setProductList(response.data.products)
      })
      .catch(function (error) {
        console.log(error);
      });

      setLoading(false)
  };

  const getCategory =  () => {
    var config = {
      method: 'get',
      url: 'https://upayments-studycase-api.herokuapp.com/api/categories/',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhbXBhbndhcjQ3NjNAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL3JhbXBhbndhcjEyMyIsImlhdCI6MTY2MTU0MjE4OSwiZXhwIjoxNjYxOTc0MTg5fQ.uVPUry245XkfAyIxK4Xq0Q4DgIXn_Qkxak1oeWOErLI',
      },
    };

   Axios(config)
      .then(function (response) {
        setCategoryData(response.data.categories)
        Constants.CATEGORIES=response.data.categories
      })
      .catch(function (error) {
        console.log(error);
      });

  };


  const _navigateToNewProduct = () => NavigationService.navigate('NewProduct');

  const _handleSelectCategory = index => {
    let selectCategory=''
    let newData = categoryData.map((val, ind) => {
      if (index === ind) {
        val.selected = true;
        selectCategory=val.name
       setIsCategory(true)
      } else {
        val.selected = false;
      }
      return val;
    });
     getCategoryList(selectCategory)
    
    setCategoryData(newData);
  };

   const getCategoryList =(selectCategory)=>{
     console.log('selectCategory',selectCategory)
     let newData = productsList.filter(val=>val.category===selectCategory)
     console.log('newData',newData)
     setFilterData(newData)
  
   }

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={[
          Styles.categoryCard,
          {
            borderColor: item.selected ? 'black' : 'white',
            
          },
        ]}
        activeOpacity={0.5}
        onPress={() => _handleSelectCategory(index)}>
        <Text style={Styles.categoryTitle}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderProduct = ({item, index}) => {
    return <ProductItem item={item} index={index} />;
  };
 const  _handleSelectCategoryAll =()=>{
   setFilterData([])
   setIsCategory(false)
   categoryData.map(val=>val.selected=false)
 }

  const _allCategory = ()=>{
    return(
      <TouchableOpacity
        style={[
          Styles.categoryCard,
          {
            borderColor:isCategory?'white': 'black',
            
          },
        ]}
        activeOpacity={0.5}
        onPress={ _handleSelectCategoryAll}
        >
        <Text style={Styles.categoryTitle}>{'All'}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={Styles.container}>
      <Header title="UPayments Store" goSearch={{}} />
      {loading?<ActivityIndicator size={'large'} color={'blue'}/>:null}
      <View style={Styles.categoryContainer}>
        <FlatList
        ListHeaderComponent={_allCategory}
          data={categoryData}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={Styles.productList}>
        <FlatList
          data={filterData.length>0?filterData:productsList}
          renderItem={renderProduct}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={Styles.addButton}>
        <IconButton source={Images.ic_plus} onPress={_navigateToNewProduct} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
