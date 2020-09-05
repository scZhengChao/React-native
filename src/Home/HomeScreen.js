import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
  Alert
} from 'react-native';
import {positionList} from '../data';
import { AlertUtil } from '../common/dialog';
import PropTypes, { func } from 'prop-types' 
import Toast from 'react-native-root-toast'; // 引入类库
const ThemeContext = React.createContext({
    a:1,
    b:2
});
export default class HomeScreen extends Component {

  static navigationOptions = {
    headerTitle: '大前端',
  };
  static contextTypes = {         store: PropTypes.object     }

  constructor(props,context) {
    super(props,context);
   
    this.state = {
      contentList: [],
      isLoading: true,
      visible:false,
      test:true
    };
    this._loadData();
    
  
  }
  componentDidMount(){
    // this.subscribe() //navigation 生命周期钩子
    console.log(this.props)
    console.log(this.context)
  }
  componentWillMount(){
      setTimeout(()=>{
          this.setState({
              test:false
          })
      },2000)
  }
  componentDidUpdate(nextProps,nextState){
    //   console.log(nextProps,nextState,'------------------update-------------')
  }
  componentWillUnmount(){
    //   console.log('HomeScrenn卸载了-------------------------------------')
  }
  subscribe(){
    this.viewDidAppear = this.props.navigation.addListener(
        'didFocus',
        (obj)=>{
            console.log('页面已经显示')
        }
    )

    this.viewDidAppear1 = this.props.navigation.addListener(
        'willFocus',
        (obj)=>{
            console.log('页面将要显示')
        }
    )

    this.viewDidAppear2 = this.props.navigation.addListener(
        'willBlur',
        (obj)=>{
            console.log('页面将要移除')
        }
    )

    this.viewDidAppear3 = this.props.navigation.addListener(
        'didBlur',
        (obj)=>{
            console.log('页面已经移除')
        }
    )
  }
  //获取数据
  _loadData() {
    setTimeout(()=> {
      this.setState({
        contentList: positionList.list,
        isLoading: false
      });
    },2000);
  }

  render() {
    if(this.state.isLoading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color='gray' size='large'/>
        </View>
      );
    }
    return (
        <FlatList 
            style={styles.contentList}
            data={this.state.contentList}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
        />
    );
  }
  _press=()=>{
    
    // Alert.alert('敬请期待');

    // 方法七： 去生命周期
    this.props.navigation.navigate('IconFont')

    //方法六： 去webview
    // this.props.navigation.navigate('Webview')

    //方法五 ： 去字体图片 svg icon
    // this.props.navigation.navigate('IconFont')

    //方法四： 去公共组件 指纹和密码登陆
    // this.props.navigation.navigate('Finger')

    // 弹框三：  去公共组件 手势登陆
    // this.props.navigation.navigate('GestureLogin')


    // 弹框二：  dialog
    // AlertUtil.show('弹框标题',
    //     <View><Text>{'可以自行设置话术'}</Text></View>,
    //     () => { 
    //         AlertUtil.hidden()
    //             // 确定的操作
    //     },
    //     () => {
    //         AlertUtil.hidden()
    //         //取消的操作
    // })
    
    //弹框一：         toast  
    // Toast.show('This is a message', {
    //     duration: Toast.durations.LONG, // toast显示时长
    //     position: Toast.positions.BOTTOM, // toast位置
    //     shadow: true, // toast是否出现阴影
    //     animation: true, // toast显示/隐藏的时候是否需要使用动画过渡
    //     hideOnPress: true, // 是否可以通过点击事件对toast进行隐藏
    //     delay: 0, // toast显示的延时
    //     onShow: () => { 
    //         // toast出现回调（动画开始时）
    //         console.log('show')
    //     },
    //     onShown: () => {
    //         // toast出现回调（动画结束时）
    //         console.log('onShown')
    //     },
    //     onHide: () => {
    //         // toast隐藏回调（动画开始时）
    //         console.log('onHide')
    //     },
    //     onHidden: () => {
    //         // toast隐藏回调（动画结束时）
    //         console.log('onHidden')
    //     }
    // });


  }
  _renderItem = ({item, index})=>{
    const {name,salary,cname,size,username,title} = item;
   
    return (
      <TouchableHighlight
        underlayColor='#e0e0e0'
        style={styles.itemContent}
        onPress={this._press}>
        <View>
          <View style={styles.pNameContent}>
            <Text style={styles.pName}>{name}</Text>
            <Text style={styles.pSalary}>{salary}</Text>
          </View>
          <Text style={styles.pCompany}>{`${cname} ${size}`}</Text>
          <View style={styles.pLine}/>
          <Text style={styles.pHr}>{`${username} ${title}`}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  _keyExtractor = (item, index) => `default_${item.name}_${index}`;
}



const ITEM_HEIGHT = 120;
const SEPERATOR_HEIGHT = StyleSheet.hairlineWidth;

const styles = StyleSheet.create({
  contentList: {
    flex: 1,
    backgroundColor: 'rgb(241,242,246)'
  },
  itemContent: {
    flex: 1,
    flexDirection: 'column',
    height: ITEM_HEIGHT,
    backgroundColor: 'white',
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  pNameContent: {
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  pName: {
    fontSize: 18
  },
  pSalary: {
    fontSize: 18,
    color: 'red'
  },
  pCompany: {
    marginTop: 10,
    height: 20,
    fontSize: 18,
    color: 'gray'
  },
  pLine: {
    backgroundColor: '#e0e0e0',
    height: SEPERATOR_HEIGHT,
    marginTop: 10,
  },
  pHr: {
    marginTop: 10,
    height: 20,
    fontSize: 18,
    color: 'rgb(29,216,200)'
  }

});