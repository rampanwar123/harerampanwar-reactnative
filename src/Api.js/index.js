import { CommonApi } from "./CommonApi";

const PRODUCTS= 'products'

export const productsApi = async ({ params }) => {
    return CommonApi({
      method: 'GET',
      params: params,
      endPoint:PRODUCTS ,
    
    }).then((res) => {
      return res;
    });
  };
