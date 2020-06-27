
import React,{ Component } from 'react';
import {
  SafeAreaView,   // 安全高度
  StyleSheet,     //style 列表
  ScrollView,
  View,
  Text,
  StatusBar,     
  FlatList,         //列表
  TouchableOpacity,     //点击透明
  Alert,        // 弹框
  Dimensions,      // 获取屏幕的宽高
  RefreshControl,    // 上拉下拉的一个loadding
  ActivityIndicator,
  ActivityIndicatorBase, // 菊花loading

} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createAppContainer  } from 'react-navigation'
import { createStackNavigator  } from 'react-navigation-stack';

import HomeScreen from './screen/HomeScreen'
import DetailScreen from './screen/DetailScreen'
import ThirdScreen from './screen/ThirdScreen'

let RootStack = createStackNavigator(
  {
    Home:{
      screen:HomeScreen,
      navigationOptions:{
        title:'首页',
        headerStyle:{
          backgroundColor:'red', // 优先
        },
        headerBackTitle:'自定义标题'
      }
    },
    Detail:{
      screen:DetailScreen,
      navigationOptions:{
        // title:'详情页',
        
      },
      headerBackTitle:'自定义标题'
    },
    Third:{
      screen:ThirdScreen
    }
    
  },
  {
    // confg 统一配置
    initialRouteName:'Home',
    defaultNavigationOptions:{
      headerStyle:{
        backgroundColor:'green'
      }
    }


  }
)

export default class app extends  Component {
  render(){
    RootStack = createAppContainer(RootStack);

    return (
      <RootStack></RootStack>
    )
  }
}

const styles = StyleSheet.create({

});
