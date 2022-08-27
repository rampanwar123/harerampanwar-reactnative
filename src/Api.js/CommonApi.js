import axios from 'axios'

const config = {
    headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhbXBhbndhcjQ3NjNAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL3JhbXBhbndhcjEyMyIsImlhdCI6MTY2MTU0MjE4OSwiZXhwIjoxNjYxOTc0MTg5fQ.uVPUry245XkfAyIxK4Xq0Q4DgIXn_Qkxak1oeWOErLI',
      },
};
let BASE_URL='https://upayments-studycase-api.herokuapp.com/api/'

console.log('config',config)


// var config = {
//     method: 'get',
//     url: 'https://upayments-studycase-api.herokuapp.com/api/products',
//     headers: {
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhbXBhbndhcjQ3NjNAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL3JhbXBhbndhcjEyMyIsImlhdCI6MTY2MTU0MjE4OSwiZXhwIjoxNjYxOTc0MTg5fQ.uVPUry245XkfAyIxK4Xq0Q4DgIXn_Qkxak1oeWOErLI',
//     },
//   };


export const CommonApi = async ({method,params,endPoint})=>{
    console.log('method,params,endPoint',method,params,endPoint)
    console.log('baseured',BASE_URL+endPoint)
    switch (method) {
  case 'GET':
    return axios 
      .get(BASE_URL+endPoint, {
        config,
       
      })
      .then(response => {
        console.log('GET RESPONSE:- ', response);
        return response;
      })
      .catch(error => {
      console.log('error get',error)
      });
  case 'POST':
    return axios
      .post(BASE_URL+endPoint, params, {
        config,
      })
      .then(response => {
        console.log('POST RESPONSE:- ', response);
        return response;
      })
      .catch(error => {
      console.log('error post',error)
      });
}
}
// switch (method) {
//   case 'GET':
//     return axios
//       .get(url, {
//         headers: axiosConfig,
//         params: params,
//       })
//       .then(response => {
//         printConsole('GET RESPONSE:- ', response);
//         return response;
//       })
//       .catch(error => {
//         if (axios.isCancel(error)) {
//           return error;
//         } else {
//           catchError(error);
//           return error.response;
//         }
//       });
//   case 'POST':
//     return axios
//       .post(url, params, {
//         headers: axiosConfig,
//         timeout: timeout,
//         cancelToken: cancelToken,
//       })
//       .then(response => {
//         printConsole('POST RESPONSE:- ', response);
//         return response;
//       })
//       .catch(error => {
//         if (axios.isCancel(error)) {
//           return error;
//         } else {
//           catchError(error);
//           return error.response;
//         }
//       });
// }
