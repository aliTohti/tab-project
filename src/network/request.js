import axios from "axios";
//方法1

// export function path1(config,success,failure){
//  const instence = axios.create({
//      baseURL:'http://123.207.32.32:8000',
//      timeout:5000
//  })
//  instence(config)
//  .then(res=>{
//     //  console.log(res);
//      success(res)
//  })
//  .catch(err=>{
//      console.log(err);
//      failure(err)
//  })
// }

//方法2  promise实例

// export function path1(config){
//  return new Promise((resolve,reject)=>{
//    const instence1 = axios.create({
//      baseURL:'http://123.207.32.32:8000',
//      timeout:5000
//    })
//    instence1(config).then(res=>{
//      resolve(res)
//    }).catch(err=>{
//      reject(err)
//    })
//   })
// }

//最终方法
export function path1(config){
    const instence = axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout:5000
    })

//拦截器---请求拦截

instence.interceptors.request.use(config=>{
  // console.log(config);   //发送成功来这个位置
  return config        //不返回的话表示只拦截   
},err=>{
  console.log(err);
  return err
})

//拦截器---响应拦截
instence.interceptors.response.use(response=>{
  // console.log(response);
  return response.data
},err=>{
  console.log(err);
})

//最终封装
    return instence(config)
}