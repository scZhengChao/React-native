import React, { Component } from 'react'
import { 
    Text, 
    View,
    StyleSheet,
    Button,
    AsyncStorage
} from 'react-native'

import {createStackNavigator} from 'react-navigation-stack'

class My extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> 我的 </Text>
                <Button title='点击加载' onPress={()=>{
                    // this._loadData()
                    this._getData()
                    this._saveData()
                }}></Button>
            </View>
        )
    }

    //存储数据
    _saveData(){
        AsyncStorage.setItem('key1','数据2',(err)=>{
            if(err) console.log('error AsyncStorage')
            console.log('success AsyncStorage')
        })
    }


    //获取数据
    _getData(){
        AsyncStorage.getItem('key1',(err,results)=>{
            if(err) console.log('error AsyncStorage')
            console.log('success AsyncStorage' + results)
        })
    }


    // 网络加载
    _loadData(){
        console.log(1)
        fetch('https://randomuser.me/api/?results=25',{
            method:'GET',   
        }).then(res=>res.json()).then(value=>{
            console.log(value)
        }).catch(err=>{
            console.log(err)
        })
    }
}

const MyStackNavigator = createStackNavigator(
    {
        My:{
            screen:My
        }
    },
    {
        defaultNavigationOptions:{
            headerTitleStyle:{
                color:'white'
            },
            headerStyle:{
                backgroundColor:'rgb(29,216,200)'
            }
        }
    }
)


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
export default  MyStackNavigator