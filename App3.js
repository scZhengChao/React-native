import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { createAppContainer  } from 'react-navigation'
import { createBottomTabNavigator  } from 'react-navigation-tabs';

import HomeScreen from './screen/HomeScreen'
import DetailScreen from './screen/DetailScreen'
import ThirdScreen from './screen/ThirdScreen'

let RootTabNavigator =  createBottomTabNavigator(
    {
        Home:{
            screen:HomeScreen,
            navigationOptions:{
                title:"shouye"
            }
        },
        Detail:{
            screen:DetailScreen,
            navigationOptions:{
                title:"Detail"
            }
        },
        Third:{
            screen:ThirdScreen,
            navigationOptions:{
                title:"Third"
            }
        }
    }
)
export class App extends Component {
    render() {
        RootTabNavigator = createAppContainer(RootTabNavigator)
        return (
            <RootTabNavigator/>
        )
    }
}

export default App
