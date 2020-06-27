import { AsyncStorage } from 'react-native';

export default class StorageUtil {

//存储
  static setData(keyName, data) {
    let promise = new Promise((resolve, reject) => {
        AsyncStorage.setItem(keyName, data,(error)=>{
            if(!error) {
                return resolve('数据存储成功');
            }else {
                return resolve('数据存储失败');
            }
        })
    });
    return promise;
  }

  //获取数据
  static getData(keyName) {
    let promise = new Promise((resolve, reject) => {
        AsyncStorage.getItem(keyName, (error, result)=>{
            if(!error) {
              return resolve(result);
            }else {
              return resolve('数据读取失败');
            }
        })
    });

    return promise;
  }

  //删除数据
  static deletData(keyName) {
    let promise = new Promise((resolve, reject) => {
        AsyncStorage.removeItem(keyName, (error)=>{
            if(!error) {
                return resolve('数据删除成功');
              }else {
                return resolve('数据删除失败');
              }
        })

    });

    return promise;
  }

}


