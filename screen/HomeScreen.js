import React ,{Component} from 'react'
import {
    View,
    Button,
    Alert
} from 'react-native'

export default class HomeScreen extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View style={{backgroundColor:'gray',flex:1}}>
                <Button title="跳转到详情页" onPress={()=>{
                   this.props.navigation.navigate('Detail',{
                    //    props to options
                    userName:'asf',
                    userInfo:'asgasg',
                    title:'titleeee'
                   });
                }}></Button>
            </View>
        )
    }
}

