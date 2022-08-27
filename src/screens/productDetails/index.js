import React,{useState,useEffect} from 'react';
import {Text, View,Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Styles from './Styles';
import Axios from 'axios'
import Images from '../../constants/Images';
import Header from '../../components/Header';
import NavigationService from '../../navigation/NavigationService';

const ProductDetails = (props) => {
  const {id} =props.route.params;
  const [details,setDetails]=useState({})

  useEffect(()=>{
   getDetails()
  },[])

  const getDetails = ()=>{
    var config = {
      method: 'get',
      url: `https://upayments-studycase-api.herokuapp.com/api/products/${id}`,
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhbXBhbndhcjQ3NjNAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL3JhbXBhbndhcjEyMyIsImlhdCI6MTY2MTU0MjE4OSwiZXhwIjoxNjYxOTc0MTg5fQ.uVPUry245XkfAyIxK4Xq0Q4DgIXn_Qkxak1oeWOErLI',
      },
    };

   Axios(config)
      .then(function (response) {
        setDetails(response.data.product)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const _goBack =()=>NavigationService.goBack()
  console.log('details',details)
  return (
    <SafeAreaView style={Styles.container}>
     <Header title={details.name} goBack={_goBack}/>
      <Image source={{uri:details.avatar}} style={{width:'100%',height:'50%'}} resizeMode='contain'/>
      <View style={{elevation:5,backgroundColor:'white',padding:10,flex
    :1,borderRadius:10}}>
        <View style={Styles.description}>
          <Text style={Styles.desTitle}>Description</Text>
          <Text style={Styles.desTitle}>${details.price}</Text>
        </View>
        <Text>{details.description}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
