import React ,{useState}from 'react';
import {Text, View,FlatList,TouchableOpacity,Button,ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header';
import Input from '../../components/Input';
import NavigationService from '../../navigation/NavigationService';
import Styles from './Styles';
import axios from 'axios';
import Constants from '../../constants/Constants';



const NewProduct = () => {
  const [title,setTitle] = useState('')
  const [discription,setDiscription] = useState('')
  const [link,setLink] = useState('https://picsum.photos/200/300')
  const [price,setPrice] = useState('')
  const [category,setCategory] = useState('')
  const [loading,setLoading]=useState(false)
  const [categoryData,setCategoryData]=useState(Constants.CATEGORIES)
  const _goBack = () => NavigationService.goBack();

  const onChangeTitle =(text)=>{
    setTitle(text)
  }
  const onChangePrice =(text)=>{
    setPrice(text)
  }
  const onChangeDiscription =(text)=>{
    setDiscription(text)
  }
  const onChangeLink =(text)=>{
    setLink(text)
  }
  const _handleSelectCategory = index => {
    let newData = categoryData.map((val, ind) => {
      if (index === ind) {
        val.selected = true;
        setCategory(val.name)
      } else {
        val.selected = false;
      }
      return val;
    });

    setCategoryData(newData);
  };

  const _addProduct =()=>{
    addProductApi()
  }

  const addProductApi=()=>{

    let data={
      name:title,
      price :Number(price),
      category :category,
      description :discription,
      avatar :link,
      developerEmail :'rampanwar4763@gmail.com'
    }
    console.log('data',data)
    setLoading(true)
    var config = {
      method: 'post',
      url: 'https://upayments-studycase-api.herokuapp.com/api/products',
      headers: { 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhbXBhbndhcjQ3NjNAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL3JhbXBhbndhcjEyMyIsImlhdCI6MTY2MTU0MjE4OSwiZXhwIjoxNjYxOTc0MTg5fQ.uVPUry245XkfAyIxK4Xq0Q4DgIXn_Qkxak1oeWOErLI'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      if(response.data.message==="Success"){
       _goBack()
      }
    })
    .catch(function (error) {
      console.log(error);
    });
    setLoading(false)
    
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

  console.log('Constants.CATEGORIES',Constants.CATEGORIES)

  return (
    <SafeAreaView style={Styles.container}>
      <Header title={'Add Product'} goBack={_goBack} />
      <Input
        placeholder={'product title'}
        value={title}
        onChangeText={onChangeTitle}
      
      />
      <Input placeholder={'price'} value={price} onChangeText={onChangePrice} />
      <Input
        placeholder={'discription'}
        value={discription}
        onChangeText={onChangeDiscription}
        textInputStyle={{height:80 }}
      />
      <Input
        placeholder={'Image link'}
        value={link}
        onChangeText={onChangeLink}
      />
      <View style={{margin:10}}>
        <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>Select Category</Text>
        <FlatList
          data={categoryData}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{marginTop:50,marginHorizontal:10}}>
      <Button title='Add Product' onPress={_addProduct}/>
      </View>
      {loading?<ActivityIndicator size={'large'} color={'blue'}/>:null}
  
    </SafeAreaView>
  );
};

export default NewProduct;
