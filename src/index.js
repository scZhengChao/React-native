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
// import Finger from './common/finger'


//common  components 
import GestureLogin from './common/gesture' 

const TabNavigator = createBottomTabNavigator(
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
        screen: TabNavigator,
        navigationOptions:{
            header :null   //这个地方要设置 null 否者会到这header 的title 有问题
        }
    },
    //  这里可以放第三方；或者公共的 组件 
    GestureLogin:{
        screen:GestureLogin,
        navigationOptions: {
            header: null,
        }
    },
    // Finger:{
    //     screen:Finger
    // }
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




