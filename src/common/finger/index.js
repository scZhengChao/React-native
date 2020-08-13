'use strict';
import React, {Component} from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import TouchID from "react-native-touch-id";
const optionalConfigObject = {
    title: "Authentication Required", // Android
    color: "#e00606", // Android,
    fallbackLabel: "Show Passcode" // iOS (if empty, then label is hidden)
}
export default class FingerPrint extends Component {
    constructor() {
        super()
        this.state = {
            biometryType: null
        };
    }

    componentDidMount() {
        TouchID.isSupported()
            .then(biometryType => {
                Alert.alert(biometryType)
                this.setState({biometryType});
            }).catch(err=>{
                Alert.alert(err.message)
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={styles.btn}
                    onPress={this.clickHandler}
                    underlayColor="#0380BE"
                    activeOpacity={1}
                >
                    <Text style={{
                        color: '#fff',
                        fontWeight: '600'
                    }}>
                        {`Authenticate with ${this.state.biometryType}`}
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }

    clickHandler() {
        TouchID.authenticate('to demo this react-native component', optionalConfigObject)
        .then(success => {
            Alert.alert('Authenticated Successfully');
        })
        .catch(error => {
            Alert.alert('Authentication Failed');
        });
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    btn: {
        borderRadius: 3,
        marginTop: 200,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#0391D7'
    }
});
