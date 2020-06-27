import React ,{Component} from 'react'
import {
    View,
    Button,
    Text
} from 'react-native'

export default class DetailScreen extends Component{

        // 优先级比 createStackNavigator 配置低
    // static navigationOptions = (props)=>{
    //     const {navigation} = props
    //     const {state:{params},navigate,goBack,push,popToTop} = navigation
    //     return {
    //         title:params.title,
    //         headerRight:(
    //             <Button title='save' onPress={()=>{
    //                 // navigate('Third')

    //                 //返回
    //                 // goBack()        // 回到原来的栈里的页面
    //                 // navigate('Home')  // 回到原来的栈里的页面
    //                 // push('Home')        //新的  之前的页面不存在了
    //                 popToTop()  // 回到原来的栈里的页面  到最新
    //             }}/>
    //         ),
    //         headerLeft:()=>{
    //             const {navigation} = props
    //             return (<Text onPress={()=>{
    //                 navigation.goBack()
    //             }}> 返回 </Text>)
    //         }
    //     }
    // }

    
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View></View>
        )
    }
}