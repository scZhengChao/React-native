import React, { Component } from 'react'
import { 
    Text, 
    View ,
    StyleSheet,
    StatusBar,
    Alert,
    ActivityIndicator
} from 'react-native'
import PropTypes from 'prop-types'
import CodePush from "react-native-code-push"; // 引入code-push
const originTextRender = Text.render;

// 解决小米miui12 兰亭字体的bug
Text.render = function render(props, ref) {
    return originTextRender.apply(this, [{ ...props,  style: [ true ? {fontFamily:null} : null, props.style] }, ref]);  
}; 

import {createStore,applyMiddleware }  from 'redux'
import {Provider, connect} from 'react-redux';
import { createReduxContainer,createReactNavigationReduxMiddleware }  from 'react-navigation-redux-helpers'


import AppContainter from './src';
import appReducer from './src/reducer.js';

const middleware = createReactNavigationReduxMiddleware(state=>state.nav)
const AppReduxContainer = createReduxContainer(AppContainter)

const mapStateToProps = state =>{
    return  {
        state: state.nav,
    };
}

const AppWithNavigationState = connect(mapStateToProps)(AppReduxContainer);
const store = createStore(appReducer, applyMiddleware(middleware));

class App extends Component {
    state = {
        receivedBytes : 0, 
        totalBytes : 0, 
        showProcess: false, 
        showIndicator:false
    };
    _handleUpdate = () => {
        this.setState({showIndicator: true});
    
        // checkForUpdate 返回promise，包含了服务端安装包的各种信息，包的大小版本之类的,
        // 如果要构建构建个性化更新界面，需要用到此方法
        // const updateMessage = await CodePush.checkForUpdate() || {};
       return CodePush.checkForUpdate().then(update=>{
            console.log('thne------------------')
            if(!update){
                Alert('提示','已经是最新版本')
            }else{
                Alert('提示','当前版本已更新',[
                    {
                        text:'ok',
                        onPress:()=>{
                            console.log('开始更新')
                        }
                    }
                ])
            }
        }).catch(err=>{
            console.log('error------------------',err)
        })

        // console.log(updateMessage,'------------')
        // console.log(updateMessage);
        // return;
    
        // 执行更新
        // await CodePush.sync(
        //     // 第一个参数吗，是个对象，可定义更新的动作
        //     {
        //         // 安装模式 'IMMEDIATE' 立刻安装，并重启 ON_NEXT_RESUME 下次启动安装
        //         installMode: CodePush.InstallMode.IMMEDIATE,
        
        //         // 强制更新模式下的安装，默认是IMMEDIATE 直接安装
        //         mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
        
        //         //更新确认弹窗设置，设置系统自带弹窗中的内容
        //         updateDialog:{
        //             mandatoryUpdateMessage:'强制更新内容: '+updateMessage.description,
        //             mandatoryContinueButtonLabel:'强制更新/确认',
        //             optionalIgnoreButtonLabel:'取消',
        //             optionalInstallButtonLabel:'安装',
        //             optionalUpdateMessage:'本次更新内容: '+updateMessage.description,
        //             title:'发现新版本'
        //         }
        //     },
        //     // 第二个参数，更新状态检测，返回数字
        //     //0 已经是最新，
        //     //1 安装完成、等待生效，
        //     //2 忽略更新，
        //     //3 未知错误，
        //     //4 已经在下载了，
        //     //5 查询更新，
        //     //6 弹出了更新确认界面，
        //     //7 下载中，
        //     //8 下载完成
        //     (status)=>{
        //         switch (status){
        //         case 0: 
        //             Alert('已经是最新版本');
        //             break;
        //         case 1 : 
        //             !updateMessage.isMandatory && Alert('更新完成, 再启动APP更新即生效');
        //             break;
        //         case 3: 
        //             Alert('出错了，未知错误');
        //             break;
        //         case 7 : 
        //             this.setState({showProcess: true});
        //             break;
        //         case 8 : 
        //             this.setState({showProcess: false});
        //             break;
        //         }
        //     },
        //   // 第三个参数，检测下载过程
        //   ({receivedBytes,totalBytes})=>{
        //     // console.log('DownloadProgress: ', receivedBytes, totalBytes);
        //     this.setState({
        //         receivedBytes: (receivedBytes/1024).toFixed(2), 
        //         totalBytes: (totalBytes/1024).toFixed(2)})
        //   },
        // );
        // this.setState({showIndicator: false});
      };
    
    handleUpdate = () => this._handleUpdate().catch(()=>{
        this.setState({showIndicator: false});
        Alert('网络错误')
    }).finally(all=>{
        this.setState({showIndicator: false});
    });













    componentDidMount(){
        // this.handleUpdate()
    }
    render() {
        return (
            <Provider store={store} style={styles.container}>
                <StatusBar barStyle="light-content" />
                <AppWithNavigationState/>
               {this.state.showIndicator && <ActivityIndicator size="large" color="#0000ff" style={styles.indicator} /> } 
            </Provider>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      position:"relative",
      justifyContent:'center',
    
    },
    indicator:{
       position:'absolute',
       top:'50%',
       width:20,
       height:20,
       left:'50%',
       transform:[
           {
               translateX:-10
               
           },
           {
                translateY:-10
           }
           
       ]
    }
});



let CodePushOptions = {
// 何时检查更新（ON_APP_START:程序启动  ON_APP_RESUME:程序从后台进入前台  MANUAL:手动控制）
checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
// 何时安装（ON_NEXT_RESTART:下次程序启动  ON_NEXT_RESUME:下次程序从后台进入前台  ON_NEXT_SUSPEND:在后台更新  IMMEDIATE:立即更新，并启动程序）
installMode: CodePush.InstallMode.IMMEDIATE,
// 表示重启程序之前，在后台呆的最短时间
minimumBackgroundDuration: 0,
// 强制更新，并启动
mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
// 更新时候的提示更新框
updateDialog: {
    // 标题
    title: '发现新版本',

    // 确认按钮标题
    optionalInstallButtonLabel: '更新',
    // 忽略按钮标题
    optionalIgnoreButtonLabel: '忽略',
    // 非强制更新情况下，提示框内容
    optionalUpdateMessage: '有新内容，是否需要更新？',

    // 强制更新按钮标题
    mandatoryContinueButtonLabel: '立即更新',
    // 强制更新情况下，提示框内容
    mandatoryUpdateMessage: '有新内容，请立即更新',

    // 是否将版本描述添加在提示框中
    appendReleaseDescription: true,
    // 添加的描述前缀
    descriptionPrefix: '更新内容：',
}
};

export default  CodePush(CodePushOptions)(App);