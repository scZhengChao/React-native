import React, { Component } from 'react'
import { 
    Text, 
    View,
    StyleSheet
} from 'react-native'

import {createStackNavigator} from 'react-navigation-stack'

class Message extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> textInComponent </Text>
            </View>
        )
    }
}


const MessageStackNavigator = createStackNavigator(
    {
        Message:{
            screen:Message
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
export default  MessageStackNavigator