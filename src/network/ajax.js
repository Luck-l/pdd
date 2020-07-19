import axios from "axios"

axios.defaults.withCredentials =false
export default function ajax(url="",params={},type="GET") {
  let promise;
  return new Promise((resolve,reject) =>{
    if("GET" === type){
      let paramsStr = "";
      Object.keys(params).forEach(key =>{
        paramsStr += key +"=" + params[key] + "&"
      })
      if(paramsStr !== ""){
        paramsStr = paramsStr.substr(0,paramsStr.lastIndexOf("&"))
      }
    url +="?" + paramsStr
      promise = axios.get(url)
    }else if("POST" === type){
      promise = axios.post(url,params)
    }
    promise.then((response)=>{
      resolve(response.data)
    }).catch(error=>{
      reject(error)
    })
  })
}