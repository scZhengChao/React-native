
import React, {Component} from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import TouchID from "react-native-touch-id";

const optionalConfigObjectSupport = {
    unifiedErrors: false, 
    passcodeFallback: false 
}
const optionalConfigObjectAuth  = {
    title: 'Authentication Required', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, 
}
export default class FingerPrint extends Component {
    constructor() {
        super()
        this.state = {
            biometryType: null
        };
    }

    componentDidMount() {
        TouchID.isSupported(optionalConfigObjectSupport)
            .then(biometryType => {
                // Success code
                if (biometryType === 'FaceID') {
                    Alert.alert('FaceID is supported.');
                } else {
                    Alert.alert('TouchID is supported.');
                }
            })
            .catch(error => {
                // Failure code
                Alert.alert(error.message);
            });
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
        TouchID.authenticate('to demo this react-native component', optionalConfigObjectAuth)
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
