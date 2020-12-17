import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import HomeStackNavigator from './Home/index';
import CompanyStackNavigator from './Company';
import MessageStackNavigator from './Message';
import MyStackNavigator from './My';
import WelcomePage from './Welcome';

import Icon from 'react-native-vector-icons/FontAwesome'



//common  components 
import GestureLogin from './common/gesture' 
import Finger from './common/finger'
import IconFont from './common/iconFont/index.js'
import Webview from './common/webview'
import Elements from './common/elements'



import BottomRouter from './bottomRouter'

const BottomNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStackNavigator,
      navigationOptions: {
        tabBarLabel: '职位',
      },
    },
    Company: {
      screen: CompanyStackNavigator,
      navigationOptions: {
        tabBarLabel: '公司',
      },
    },
    Message: {
      screen: MessageStackNavigator,
      navigationOptions: {
        tabBarLabel: '消息',
      },
    },
    My: {
      screen: MyStackNavigator,
      navigationOptions: {
        tabBarLabel: '我的',
      },
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions:({navigation})=>({
      // focused: boolean;
      // tintColor?: string;
      // horizontal?: boolean;
      tabBarIcon:({focused,tintColor,horizontal})=>{
        const  { routeName} = navigation.state
        let iconName ;
        if(routeName === 'Home'){
          iconName = 'globe'
        }else if(routeName === 'Company'){
          iconName = 'building-o'
        }else if(routeName === 'Message'){
          iconName = 'comments-o'
        }else if(routeName === 'My'){
          iconName = 'user-circle-o'
        }

        return <Icon name={iconName} size={20} color={tintColor}></Icon>
      }
    }),
    tabBarOptions:{
      activeTintColor:'rgb(29,216,200)',
      inactiveTintColor:"gray"
    }
  },
);




BottomNavigator.navigationOptions = ({ navigation }) => {
    return {
        header :null   //这个地方要设置 null 否者会到这header 的title 有问题
    };
  };


const AppInitNavigator = createStackNavigator({
  welcome:{
    screen:WelcomePage,
    navigationOptions: {
      header: null,
    }
  }
})

const TabStackNavigator = createStackNavigator({
    BottomTabNavigator: {
        // screen: BottomNavigator
        screen: BottomRouter,
        navigationOptions:({navigation})=>{
            let tabBarVisible = true;
            if (navigation.state.index > 0) {
                tabBarVisible = false;
            }
            return {
                tabBarVisible,
                headerShown: false, // 自带头部置空
                gestureEnabled: false // 左侧滑动返回   ios默认开启，android默认关闭
            };
        }
    },
    //  这里可以放第三方；或者公共的 组件 
    GestureLogin:{
        screen:GestureLogin,
        navigationOptions: {
            header: null,
        }
    },
    Finger:{
        screen:Finger
    },
    IconFont:{
        screen:IconFont
    },
    Webview:{
        screen:Webview
    },
    Elements:{
        screen:Elements
    }
},{
    initialRouteName:'BottomTabNavigator',
    
})

const switchNavigator = createSwitchNavigator({
  Init:AppInitNavigator,
  Main:TabStackNavigator
})


const AppNavigator = createAppContainer(switchNavigator);

// const AppNavigator = createAppContainer(TabNavigator);

export default AppNavigator;




