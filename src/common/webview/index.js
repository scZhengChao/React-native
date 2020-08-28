import React, { Component } from 'react';
import { 
    WebView,
} from 'react-native-webview';  //引入WebView 

import {
    View,
    Text
} from 'react-native'

class MyInlineWeb extends Component {
    static navigationOptions=(props)=>{
        const { navigation ,navigationOptions,screenProps,theme} = props
        // console.log(navigation,navigationOptions,screenProps,theme)
        return {
            headerTitle:'My Webview'
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
        return (
            <View>
                <Text>render error</Text>
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
        console.log(event)
        this.refs.webview.postMessage('react-native 想H5发送了一条消息')
    }
    ToH5=()=>{
        console.log(`向H5发送信息`)
    }
    componentDidMount(){
        console.log(this.refs.webview)
        // console.log(this.webview)
        let i = 0
        setInterval(()=>{
            i++
            console.log('111111111111111111111')
            this.refs.webview.injectJavaScript(`document.querySelector('.des').innerHTML='持续注入中'${i}`)
        },2000)
    }
    render() {
        return (
            <WebView
                ref={'webview'}
                // ref={w=>this.webview = w }
                originWhitelist={['*']}
                allowUniversalAccessFromFileURLs={true} 
                mixedContentMode={'always'}
                // source={{ html: '<h1>Hello world</h1>' }}
                source={{uri:'http://192.168.221.227:8000/test.html'}}
                // source={{uri:'https://www.baidu.com/'}}
                onError={this.onError}
                onLoad={this.onLoad}
                onLoadEnd={this.onLoadEnd}
                onLoadStart={this.onLoadStart}
                renderError={this.renderError}
                startInLoadingState={true}
                useWebkit={true}
                // injectJavaScript={this.injectJavaScript}
                injectedJavaScript={this.injectedJavaScript()}
                onMessage={this.handMessage}
            />
        );
    }
}
export default MyInlineWeb