import React ,{Component} from 'react'
import {
    Platform, 
    StyleSheet, 
    Text, 
    View, 
    Alert,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native'
import PropTypes from 'prop-types'
export default class MyLifeCricle extends Component {
    constructor(props){
        super(props)
        console.log('getProp 和 initstate')
        this.state ={
            a:'1',
            test:'state'
        }
    }
 
    
    // 取代了 componentwillMount componentWillReceiveProps  shouldComponentUpdate compoentWillUpdate 四个钩子合为一个
    // 强制开发者在render之前 只是做无副作用的操作，且局限在props 和 state 之间
    // 返回一个对象 更新state  类似 setState({}), 若返回null 则不更新shouldComponentUpdate ， 返回值是必须的
    // getDerivedStateFromProps   取不到this==undefined  即将跟新的 nextProps 和 还未跟新的 preState   
    static getDerivedStateFromProps(nextProps,nextState){
        console.log('getDerivedStateFromProps-------------------------',nextProps,nextState)
        // const {type} = nextProps;
        // 当传入的type发生变化的时候，更新state
        // if (type !== preState.type) {
            // return {
                // type,
            // };
        // }
        // 否则，对于state不进行任何操作
        return {
            test:'getDerivedStateFromProps'
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate-------------------------',nextProps,nextState)
        return true
    }
    updateState=()=>{
        this.setState({
            test:'updated'
        })
    }
    render(){
        console.log('render-------------------------渲染中')
        const {title,upDateTitle} = this.props
        return (
            <View>
                <Text>{title}</Text>
                <Text>{this.state.test}</Text>
                <TouchableWithoutFeedback onPress={this.updateState}>
                    <Text>跟新state</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={upDateTitle}>
                    <Text>跟新props</Text>
                </TouchableWithoutFeedback>
            </View>
        )
    }
    componentDidMount(){
        console.log('componentDidMount---------------------------初始化完毕')
    }
    //调用于render 之后；可以读取dom但无法使用dom
    // 他可以是你的组件在更新前获取一些DOm信息（例如 滚动位置）
    // 此生命周期的任何返回值 都将作为参数传递 给ComponentDidUpdate
     getSnapshotBeforeUpdate(prevProps, prevState) {    //prev 之前的
        console.log('getSnapshotBeforeUpdate----------------',prevProps,prevState)
         //我们是否要添加新的 items 到列表?     
         // 捕捉滚动位置，以便我们可以稍后调整滚动.     
        //  if (prevProps.list.length < this.props.list.length) {       
        //      const list = this.listRef.current;       
        //      return list.scrollHeight - list.scrollTop;     
        // }     
        return 'sss';   
    }
    componentDidUpdate(prevProps, prevState, snapshot) {     //之前的
        console.log('componentDidUpdate----------------更新完毕',prevProps,prevState,snapshot)
        //如果我们有snapshot值, 我们已经添加了 新的items.     
        // 调整滚动以至于这些新的items 不会将旧items推出视图。     
        // (这边的snapshot是 getSnapshotBeforeUpdate方法的返回值)     
        // if (snapshot !== null) {       
        //     const list = this.listRef.current;       
        //     list.scrollTop = list.scrollHeight - snapshot;     
        // }   
    }
    componentWillUnmount(){
        console.log('componentWillMount----------------------将要卸载')
    }
}