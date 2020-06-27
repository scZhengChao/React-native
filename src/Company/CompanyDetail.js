import React, {Component} from 'react';
import {Text, View, Button, Image, StyleSheet, Dimensions} from 'react-native';

const wWidth = Dimensions.get('window').width;

class CompanyDetail extends Component {
  static navigationOptions = {
    headerTitle: '公司详情',
    header: () => {
      <View style={{width: 100, height: 100, backgroundColor: 'red'}} />;
    },
  };

  render() {
    const {params} = this.props.navigation.state;
    const { company } = params;
    console.log('CompanyDetail', this.props);
    return (
      <View>
        <Image style={styles.headerImage} source={{uri:''}} />
        <View style={styles.headerContent}>
          <Image style={styles.logo} source={{uri: company.logo}} />
          <View>
            <Text style={styles.pName}>{`${company.name}`}</Text>
            <Text style={styles.pLocation}>{`${company.location}\n\n${company.type} | ${company.size} | ${company.employee}`}</Text>
          </View>
        </View>
        <View style={styles.pLine} />
        <View style={styles.btnContent}>
          <Text style={styles.btnText}>公司概况</Text>
          <Text style={styles.btnText}>热招职位</Text>
        </View>
        <View style={styles.descContent}>
          <View style={styles.textContent}>
            <Text style={styles.pDescContent}>{company.inc}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default CompanyDetail;

const SEPERATOR_HEIGHT = StyleSheet.hairlineWidth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    width: wWidth,
    height: 200,
    backgroundColor: 'yellow',
  },
  headerContent: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginLeft: 20,
    height: 50,
    width: 50,
  },

  pName: {
    fontSize: 14,
  },
  pLocation: {
    marginTop: 10,
    fontSize: 12,
    color: 'grey',
  },
  pLine: {
    height: SEPERATOR_HEIGHT,
    backgroundColor: '#e0e0e0',
  },

  btnContent: {
    flexDirection: 'row',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
    fontSize: 16,
  },
  descContent: {
    flexGrow: 1,
    marginBottom: 0,
    backgroundColor: 'rgb(241,242,246)',
  },
  textContent: {
    marginTop: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  pDescContent: {
    fontSize: 12,
    backgroundColor: 'white',
  },
  pDesc: {
    marginTop: 10,
    height: 20,
    fontSize: 12,
    color: 'rgb(29,216,200)',
  },
  pPosition: {
    fontSize: 12,
  },
});
