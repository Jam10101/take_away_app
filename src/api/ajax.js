/*
*
* */
import axios from 'axios'

export default function ajax(url, data={}, type='GET') {
  return new Promise(function (resolve, reject) {
    // 执行异步ajax请求
    let promise
    if(type === 'GET') {
      // 如果是get请求，那么就拼接字符串
      let dataStr = ''
      // Object.keys()方法： 以数组的形式将一个对象的所有key遍历出来 // 结果： ['key1', 'key2', 'key3', ...]
      // Array.prototype.forEach()方法：给数组（如 Object.keys(data)）中的每个元素（key）执行一次自定义的函数
      Object.keys(data).forEach(key => {
        dataStr += key + "=" + data[key] + "&"
      })
      if(dataStr !==  ''){
        // 去除最后的&
        // String.prototype.substring()方法： 截取字符串, 其范围： [indexStart, indexEnd)
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url += '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    }else {
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      // 成功，则调用resolve(),返回response.data
      resolve(response.data)
    }).catch(function (error) {
      // 失败，则调用reject()
      reject(error)
    })
  })
}
