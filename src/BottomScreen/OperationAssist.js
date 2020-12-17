import React, { Component } from 'react'
import { 
    Text, 
    View,
    StyleSheet,
    Button,
    AsyncStorage
} from 'react-native'

class OperationAssist extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> OperationAssist </Text>
            </View>
        )
    }

 
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
export default  OperationAssist