import  React,{Component} from 'react'
import { 
    Platform, 
    StyleSheet, 
    Text, 
    View, 
    Alert,
    Image,
    Dimensions
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
// import AntDesign from "react-native-vector-icons/AntDesign"
// import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import Entypo from 'react-native-vector-icons/Entypo'

import Mysvg from '../svgComponent/index'
import Life from '../lifeStyle'


export default class icon extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:'hahah'
        }
    }
    render(){
        return (
            <View>
                <Text>vector-icons</Text>
                <Icon name={'address-book'} size={20} color={'red'}></Icon>
                <Text>url 网络图片</Text>
                <Image
                    style={styles.tinyLogo}
                 source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                  }}
                ></Image>
                 <Text>Base64 图片</Text>
                <Image
                style={styles.logo}
                 source={{
                    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                  }}
                ></Image>
                <Text>WebP  图片</Text>
                <Image
                  style={styles.logo}
                 source={require('../../assets/webp.webp')}
                ></Image>
                <Text>本地图片资源</Text>
                  <Image
                  style={styles.logo}
                 source={require('../../assets/timg.png')}
                ></Image>
                <Text>svg 矢量图</Text>
                <Mysvg icon="zichan" size="40" color="red"/>
                <Mysvg icon="money" size="40" color="red"/>
                <Text>生命周期 样式 16.4+ 最新版</Text>
                  <Life title={this.state.title} upDateTitle={this.upDateTitle}></Life>
            </View>
        )
    }
    upDateTitle=()=>{
        this.setState({
            title:'updateProps'
        })
    }
    componentDidMount(){

    }
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });