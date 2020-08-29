import React, { Component } from 'react';
import { 
    WebView,
} from 'react-native-webview';  //引入WebView 

import {
    View,
    Text,
    TouchableHighlight,
    BackHandler
} from 'react-native'

class MyInlineWeb extends Component {
    constructor(props){
        super(props)
        this.state = {
            backButtonEnabled:false,
            sourcUri:null
        }
        this.nav = this.props.navigation;//导航
        // 添加返回键监听(对Android原生返回键的处理)
        this.addBackAndroidListener(this.nav);
    }
    static navigationOptions=(props)=>{
        const { navigation ,navigationOptions,screenProps,theme} = props
        // console.log(navigation,navigationOptions,screenProps,theme)
        return {
            headerTitle:'My Webview',
            headerTitleStyle:{
                textAlign:'center',
                color:'green'
            },
            headerLeft:(data)=>{
                console.log(data,'headerLeft')
                return (
                    <TouchableHighlight
                    activeOpacity={1}
                    onPress={() => {
                        navigation.state.params.goBackPage();
                    }}
                >
                    <View>
                        <Text>go back</Text>
                    </View>
                </TouchableHighlight>
                )
            },
        }
    }
     // 监听原生返回键事件
    addBackAndroidListener(navigator) {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    onBackAndroid = () => {
        if (this.state.backButtonEnabled) {
            this.refs.webview.goBack();
            return true;
        } else {
            return false;
        }
    }
    onError=(data)=>{
        console.log(`当WebView加载失败时调用的函数:${data}`)
    }
    onLoad=(data)=>{
        console.log(`当 WebView加载成功后执行的函数:${data}`)
    }
    onLoadEnd=(data)=>{
        console.log(`当加载结束调用，不管是成功还是失败:${data}`)
    }
    onLoadStart=(data)=>{
        console.log(`当 WebView刚开始加载时调用的函数:${data}`)
    }
    renderError=(data)=>{
        console.log('renderError')
        console.log(data)
        return (
            <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',backgroundColor:'green',height:'100%',width:'100%'}}>
                <Text
                >render error </Text>
            </View>
        )
    }
    injectJavaScript=(data)=>{
        console.log(`在网页加载完成之后，还可以主动调用此方法（以 ref 形式调用）继续给 WebView 注入 JS 代码。注入后会立即执行:${data}`)
    }
    injectedJavaScript=(data)=>{
        console.log(`设置 js 字符串，在网页加载之前注入的一段 JS 代码。`)
        // return `(function(){
        //     window.postMessgae = function(data){
        //         window.ReactNativeWebview.postMessage(data) //web 端实际上调用的是这个 函数
        //     }
        // })()`
        return `document.body.style.backgroundColor = 'red'`
    }
    handMessage=(event)=>{
        console.log(`在 webview 内部的网页中调用 window.postMessage 方法时可以触发此属性对应的函数，从而实现网页和 RN 之间的数据交换。 设置此属性的同时会在 webview 中注入一个 postMessage 的全局函数并覆盖可能已经存在的同名实现`)
        JSON.parse(event.nativeEvent)  
        this.refs.webview.postMessage('react-native 想H5发送了一条消息')
    }
    ToH5=()=>{
        console.log(`向H5发送信息`)
    }
    onNavigationStateChange = navState => {
        console.log(navState,'onNavigationStateChange')
        this.setState({
            backButtonEnabled: navState.canGoBack
        });
    };
    componentDidMount(){
        this.props.navigation.setParams({//给导航中增加监听事件
            goBackPage: this._goBackPage
        });
        // console.log(this.webview)
        // let i = 0
        // this.inter = setInterval(()=>{
        //     i++
        //     console.log('111111111111111111111')
        //     this.refs.webview.injectJavaScript(`document.querySelector('.des').innerHTML='持续注入中${i}'`)  //持续注入
        //     this.refs.webview.injectJavaScript(`toRN('asasfasf')`)  // 取出函数传值
        // },2000)
    }
    componentWillUnmount(){
        this.inter && clearInterval(this.inter)
    }
    _goBackPage = () => {
        //  官网中描述:backButtonEnabled: false,表示webView中没有返回事件，为true则表示该webView有回退事件
        if (this.state.backButtonEnabled) {
            this.refs['webView'].goBack();
        } else {//否则返回到上一个页面
            this.nav.goBack();
        }
    };
    onShouldStartLoadWithRequest=(data)=>{
        console.log(`允许为 webview 发起的请求运行一个自定义的处理函数。返回 true 或 false 表示是否要继续执行响应的请求。
        比如允许 H5调起 拨打电话地图都Linking`)
        console.log(data)
        this.setState({
            sourcUri:data.url
        })
        return true
    }
    renderLoading=()=>{
        return (
            <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',backgroundColor:'green',height:'100%',width:'100%'}}>
                <Text
                >加载中</Text>
            </View>
        )
    }
    render() {
        return (
            <WebView
                ref={'webview'}
                style={{flexDirection:'row',backgroundColor:'red'}}
                // ref={w=>this.webview = w }
                originWhitelist={['*']}
                allowUniversalAccessFromFileURLs={true} 
                mixedContentMode={'always'}
                // source={{ html: '<h1>Hello world</h1>' }}
                source={{uri:'http://192.168.3.6:8000/test.html'}}
                // source={{uri:'https://www.iqiyi.com/'}}
                // source={{uri:'https://www.baidu.com/'}}
                onError={this.onError}
                onLoad={this.onLoad}
                onLoadEnd={this.onLoadEnd}
                onLoadStart={this.onLoadStart}
                renderError={this.renderError}
                startInLoadingState={true}
                renderLoading={this.renderLoading}
                onNavigationStateChange={this.onNavigationStateChange}
                useWebkit={true}
                onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                // injectJavaScript={this.injectJavaScript}
                // injectedJavaScript={this.injectedJavaScript()}
                // onMessage={this.handMessage}
            />
        );
    }
}
export default MyInlineWeb