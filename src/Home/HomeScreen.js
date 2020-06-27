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

export default class HomeScreen extends Component {

  static navigationOptions = {
    headerTitle: '大前端',
  };

  constructor(props) {
    super(props);

    this.state = {
      contentList: [],
      isLoading: true
    };

    this._loadData();
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

  _renderItem({item, index}) {
    const {name,salary,cname,size,username,title} = item;
    return (
      <TouchableHighlight
        underlayColor='#e0e0e0'
        style={styles.itemContent}
        onPress={()=>{
          Alert.alert('敬请期待');
        }}>
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