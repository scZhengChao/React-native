import React, { Component } from 'react'
import { 
    Text, 
    View,
    StyleSheet,
    Button,
    AsyncStorage
} from 'react-native'
import { connect } from "react-redux";
class AssetOperation extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button 
                    onPress={this.onPressLearnMore}
                    title="Learn More"
                ></Button>
                <Text> AssetOperation </Text>
            </View>
        )
    }
    onPressLearnMore=()=>{
        console.log(this.props)
        this.props.navigation.navigate("WorkorderOperation")
        this.props.change('运维中心1')
    }
 
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
export default connect(
    state=>({

    }),
    {
        change:(data)=>({type:'CHANGEUSER',payload:data})
    }
)(AssetOperation) 