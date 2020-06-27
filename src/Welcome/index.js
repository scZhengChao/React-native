import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class WelcomePage extends Component {

  componentDidMount() {
    setTimeout(()=>{
      this.props.navigation.navigate('Main');
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>BOSS直聘</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(29,216,200)'
  },
  welcome: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
});
