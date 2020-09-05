import React, { Component } from 'react'
import { 
    Text, 
    View ,
    StyleSheet,
    StatusBar
} from 'react-native'
import PropTypes from 'prop-types'
import codePush from "react-native-code-push"; // 引入code-push
const originTextRender = Text.render;
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
    render() {
        return (
            <Provider store={store} style={styles.container}>
                <StatusBar barStyle="light-content" />
                <AppWithNavigationState/>
            </Provider>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      position:"relative"
    },
  });


console.log(codePush)

  let codePushOptions = {
    // 何时检查更新（ON_APP_START:程序启动  ON_APP_RESUME:程序从后台进入前台  MANUAL:手动控制）
    checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
    // 何时安装（ON_NEXT_RESTART:下次程序启动  ON_NEXT_RESUME:下次程序从后台进入前台  ON_NEXT_SUSPEND:在后台更新  IMMEDIATE:立即更新，并启动程序）
    installMode: codePush.InstallMode.IMMEDIATE,
    // 表示重启程序之前，在后台呆的最短时间
    minimumBackgroundDuration: 0,
    // 强制更新，并启动
    mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
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
  
  
export default  codePush(codePushOptions)(App);