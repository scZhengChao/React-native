/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
  SafeAreaView,   // 安全高度
  StyleSheet,     //style 列表
  ScrollView,
  View,
  Text,
  StatusBar,     
  FlatList,         //列表
  TouchableOpacity,     //点击透明
  Alert,        // 弹框
  Dimensions,      // 获取屏幕的宽高
  RefreshControl,    // 上拉下拉的一个loadding
  ActivityIndicator,
  ActivityIndicatorBase, // 菊花loading

} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const { width } = Dimensions.get('window');

import jsondata from './city_list.json'
export default class app extends  Component {
  constructor(props){
    super(props)
    this.state = {
      dataList:[],
      isRefresh:false,
      loadMore:false,
      loading:true
    }
    console.log(1)
    this.fetchData()
  }
  fetchData(){
    setTimeout(() => {
      this.setState({
        dataList:jsondata,
        loading:false
      })
    }, 3000);
  }
  
  _renderLoadingView=()=>{
    return (
      <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'gray',flex:1}}>
        <ActivityIndicator size='large'></ActivityIndicator>
      </View>
    )
  }

  _renderListView=()=>{
    return (
      <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
      <FlatList 
        style={{flex:1,backgroundColor:"#fff"}} 
        data={this.state.dataList}
        renderItem={this._renderItem}
        // ListEmptyComponent={} //空数据
        ListHeaderComponent={this._renderListHeader}
        ListFooterComponent={this._renderListFooter}
        refreshControl={   
            <RefreshControl 
                title='loading...'
                refreshing={this.state.isRefresh}
                colors={['red']}  
                onRefresh={()=>{
                  this.setState({
                    isRefresh:true
                  })
                  setTimeout(()=>{
                    this.setState({
                      isRefresh:false
                    })
                  },2000)
                }}
            />
        }
        onEndReached={()=>{
          this.setState({
            loadMore:true
          })
          setTimeout(()=>{
            this.setState({
              loadMore:false
            })
          },2000)
        }}
        onEndReachedThreshold={0.1}
        ItemSeparatorComponent={()=>{
          return <View style={{height:1,backgroundColor:'#999999'}}></View>
        }}
        keyExtractor={this._keyExtractor}
      />
  </SafeAreaView>
 
    )
  }
  _keyExtractor=(item,index)=>{
    return 'index'+item+index;
  }
  render(){
    if(this.state.loading){
      return this._renderLoadingView()
    }
    return this._renderListView()
    
  }
  _renderListHeader=({})=>{
    return (
      <View style={styles.listHeader}>
        <Text style={{color:'white'}}>头部布局</Text>
      </View>

    )
  }
  _renderListFooter=({})=>{
    return (
      <View style={styles.listFooter}>
        {this.state.loadMore && <ActivityIndicator/> }
        <Text style={{color:'gray'}}>{this.state.loadMore?'加载更多':'我是有底线的'}</Text>
      </View>

    )
  }
  _renderItem=({item})=>{
    return (
      <TouchableOpacity onPress={()=>{
        console.log(item.name)
        Alert.alert(item.name+'点击了')
      }}>
        <Text style={styles.itemStyle}>{item.name}</Text>
      </TouchableOpacity>
    )
  }
  
}


const styles = StyleSheet.create({
  itemStyle:{
    marginVertical:20,
    marginLeft:10
  },
  listHeader:{
    height:50,
    width,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center'
  },
  listFooter:{
    height:50,
    width,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  }
});

