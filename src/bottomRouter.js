import React from 'react';
import { Image, Text, StyleSheet, StatusBar } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { BottomTabBar } from 'react-navigation-tabs';
// import { DeviceEventEmitter } from 'react-native';
// 引入页面容器
import OperationCenter from './BottomScreen/OperationCenter'
import AssetOperation from './BottomScreen/AssetOperation'
import CreateApply from './BottomScreen/CreateApply'
import MyApprove from './BottomScreen/MyApprove'
import OperationAssist from './BottomScreen/OperationAssist'
import WorkorderOperation from './BottomScreen/WorkorderOperation'
import SpecialOperation from './BottomScreen/SpecialOperation'
import CommandRecheck from './BottomScreen/CommandRecheck'
import PasswordTogether from './BottomScreen/PasswordTogether'
import ApproveHistory from './BottomScreen/ApproveHistory'
import OperationLog from './BottomScreen/OperationLog'
import AgentSet from './BottomScreen/AgentSet'


import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
// import UserRoleProActions from '../../store/actions/user';


const operationInfo = {
  '运维中心': { route: 'OperationCenter', on: require('./assets/images/anquan-active.png'), off: require('./assets/images/anquan.png') },
  '资产运维': { route: 'AssetOperation', on: require('./assets/images/banquan-active.png'), off: require('./assets/images/banquan.png') },
  '新建申请': { route: 'CreateApply', on: require('./assets/images/cangku-active.png'), off: require('./assets/images/cangku.png') },
  '待我审批': { route: 'MyApprove', on: require('./assets/images/chayan-active.png'), off: require('./assets/images/chayan.png') },
  '运维协助': { route: 'OperationAssist', on: require('./assets/images/chucun-active.png'), off: require('./assets/images/chucun.png') },

  '工单运维': {
    route: 'WorkorderOperation', on: require('./assets/images/chufang-active.png'), off: require('./assets/images/chufang.png')
  },
  '特殊运维': { route: 'SpecialOperation', on: require('./assets/images/diceng-active.png'), off: require('./assets/images/diceng.png') },
  '命令复核': { route: 'CommandRecheck', on: require('./assets/images/didan-active.png'), off: require('./assets/images/didan.png') },
  '密码会同': {
    route: 'PasswordTogether', on: require('./assets/images/erweima-active.png'), off: require('./assets/images/erweima.png')
  },
  '审批历史': { route: 'ApproveHistory', on: require('./assets/images/fapiao-active.png'), off: require('./assets/images/fapiao.png') },
  '运维日志': { route: 'OperationLog', on: require('./assets/images/fenbu-active.png'), off: require('./assets/images/fenbu.png') },
  '代理设置': { route: 'AgentSet', on: require('./assets/images/tubiao-active.png'), off: require('./assets/images/tubiao.png') },
}


/**
 * 
 * bottomBar
 * lable 和 icon
 * 最终用在Option  
 */
const getLabel = (label, tintColor) => {
  return <Text style={[styles.label, { color: tintColor }]}>{label}</Text>;
};
const getBarIcon = (routeName, focused) => {
  let Icon;
  if (routeName === '新建申请') {
    Icon =focused ?  <Image style={styles.centerAdd} source={operationInfo[routeName].on} />:  <Image style={styles.centerAdd} source={operationInfo[routeName].off} /> ;
  } else {
    Icon = focused ? <Image style={styles.icon} source={operationInfo[routeName].on} />
      :
      <Image style={styles.icon} source={operationInfo[routeName].off} />;
  }
  return Icon;
};
const getOption = (name) => {
  return {
    tabBarLabel: ({ focused, tintColor }) => {
      return getLabel(name, tintColor);
    },
    tabBarIcon: ({ focused, tintColor }) => {
      return getBarIcon(name, focused);
    },
    tabBarOnPress: ({ navigation, defaultHandler }) => {
      StatusBar.setBarStyle('light-content');
      defaultHandler();
    }
  }
}

/* 路由页面 */
let tabbarRoutes = {
  OperationCenter: {
    screen: OperationCenter,
    navigationOptions: getOption('运维中心')
  },
  AssetOperation: {
    screen: AssetOperation,
    navigationOptions: getOption('资产运维')
  },
  CreateApply: {
    screen: CreateApply,
    navigationOptions: getOption('新建申请')
  },
  MyApprove: {
    screen: MyApprove,
    navigationOptions: getOption('待我审批')
  },
  OperationAssist: {
    screen: OperationAssist,
    navigationOptions: getOption('运维协助')
  },
  WorkorderOperation: {
    screen: WorkorderOperation,
    navigationOptions: getOption('工单运维')
  },
  SpecialOperation: {
    screen: SpecialOperation,
    navigationOptions: getOption('特殊运维')
  },
  CommandRecheck: {
    screen: CommandRecheck,
    navigationOptions: getOption('命令复核')
  },
  PasswordTogether: {
    screen: PasswordTogether,
    navigationOptions: getOption('密码会同')
  },
  ApproveHistory: {
    screen: ApproveHistory,
    navigationOptions: getOption('审批历史')
  },
  OperationLog: {
    screen: OperationLog,
    navigationOptions: getOption('运维日志')
  },
  AgentSet: {
    screen: AgentSet,
    navigationOptions: getOption('代理设置')
  }
}

/* routes */
const originalRoutes = [
  { key: 'OperationCenter', routeName: 'OperationCenter', name: '运维中心', params: undefined },
  { key: 'AssetOperation', routeName: 'AssetOperation', name: '资产运维', params: undefined },
  { key: 'CreateApply', routeName: 'CreateApply', name: '新建申请', params: undefined },
  { key: 'MyApprove', routeName: 'MyApprove', name: '待我审批', params: undefined },
  { key: 'OperationAssist', routeName: 'OperationAssist', name: '运维协助', params: undefined },
  { key: 'WorkorderOperation', routeName: 'WorkorderOperation', name: '工单运维', params: undefined },
  { key: 'SpecialOperation', routeName: 'SpecialOperation', name: '特殊运维', params: undefined },
  { key: 'CommandRecheck', routeName: 'CommandRecheck', name: '命令复核', params: undefined },
  { key: 'PasswordTogether', routeName: 'PasswordTogether', name: '密码会同', params: undefined },
  { key: 'ApproveHistory', routeName: 'ApproveHistory', name: '审批历史', params: undefined },
  { key: 'OperationLog', routeName: 'OperationLog', name: '运维日志', params: undefined },
  { key: 'AgentSet', routeName: 'AgentSet', name: '代理设置', params: undefined },
];

//自定义BottomTabBar
class CustomBottomTabBar extends React.Component {
  //这里对navigation进行处理，注意这里不能直接修改props.navigation,会报错，
  //所以只需要传入一个自定义的navigation，而BottomTabBar只会用到navigation.state中routes和index,
  //所以就构造这么一个虚假的navigation就可以了
  state = {
    isHidden: false
  }
  /* 控制底部导航栏显示隐藏 */
  // componentDidMount() {
  //   DeviceEventEmitter.addListener('closeBottomTab', (val) => {
  //     this.setState({ isHidden: val })
  //   });
  //  DeviceEventEmitter.emit('closeBottomTab', false);
  // }
  // componentWillUnmount() {
  //   DeviceEventEmitter.removeListener('closeBottomTab');
  // }

  dealNavigation = () => {
    const { routes, index } = this.props.navigation.state;
    // 根据是否需要显示商品推荐菜单来决定state中的routes
    let finalRoutes = this.filterOperation();
    const currentRoute = routes[index];
    return {
      state: {
        index: finalRoutes.findIndex(route => currentRoute.key === route.key), //修正index
        routes: finalRoutes
      }
    };
  };

  filterOperation = (arr) => {
    if (this.props.screenProps.module) {
      let operation = this.props.screenProps.module.filter(item => item.menuName === this.props.screenProps.user)[0].childMenu.slice(0, 4);
      let nameArr = operation.map(item => item.menuName);
      return originalRoutes.filter(route => route.name === '运维中心' || nameArr.includes(route.name))
    } else {
      return originalRoutes
    }
  }

  render() {
      console.log('CustomBottomTabBar---render----:',this.props.screenProps.user)
    const { navigation, ...restProps } = this.props;
    const myNavigation = this.dealNavigation();
    return <BottomTabBar {...restProps} navigation={myNavigation} style={{ display: this.state.isHidden || myNavigation.state.index === -1 ? 'none' : 'flex' }} />;
  }
}

const MyTabRouter = createBottomTabNavigator(tabbarRoutes, {
  tabBarComponent: CustomBottomTabBar,
  backBehavior: 'initialRoute',
  swipeEnabled: true,
  animationEnabled: true,
  initialRouteName: 'OperationCenter',
  tabBarOptions: {
    // label和icon的背景色 活跃状态下（选中） ios
    activeBackgroundColor: 'rgba(0,0,0,0)',
    // label和icon的前景色 活跃状态下（选中）
    activeTintColor: '#FF9023',
    // label和icon的背景色 不活跃状态下（未选中） ios
    inactiveBackgroundColor: 'rgba(0,0,0,0)',
    // label和icon的前景色 不活跃状态下(未选中)
    inactiveTintColor: '#817F7F',
    showIcon: true,
    showLabel: true,
    style: {
      borderTopColor: '#E4E7ED',
      backgroundColor: 'rgba(250,250,250,0.9)',
    }
  }
});

class BottomTab extends React.Component {
  //这里必须有这个静态属性，表示将这个页面视为一个navigator，这样才能和AppStack共用一套导航系统
  static router = MyTabRouter.router;
  render() {
      let {permission} = this.props
    //screenProps:后代路由都可以通过this.props.screenProps获取到值
    return <MyTabRouter {...this.props} screenProps={{ module: this.props.user.menuByUserModule ,user:permission}} />;
  }
}


const mapStateToProps = state => ({ user: state.BottomScreen.user,permission: state.BottomScreen.activePermissiion});

const mapDispatchToProps = (dispatch) => ({
//   actions: bindActionCreators(UserRoleProActions, dispatch),
  dispatch: dispatch
});
export default connect(mapStateToProps, mapDispatchToProps)(BottomTab);

const styles = StyleSheet.create({
  icon: {
    width:30,
    height:30
  },
  centerAdd: {
    marginTop: -20,
    width:30,
    height:30
  },
  label: {
    fontSize: 11,
    textAlign: 'center'
  }
});