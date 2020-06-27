import React, { Component } from 'react'
import { Text, View ,Button} from 'react-native'

export default class ThirdScreen extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                <Button title='随便' onPress={()=>{
                    
                }}></Button>
            </View>
        )
    }
}
