

import React ,{Component,PureComponent} from 'react'
import OkGesturePassword   from 'react-native-ok-gesture-password'
import {
    Platform, 
    StyleSheet, 
    Text, 
    View, 
    Alert
} from 'react-native'



export default class Gesture extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            point1: "#FFFFFF",
            point2: "#FFFFFF",
            point3: "#FFFFFF",
            point4: "#FFFFFF",
            point5: "#FFFFFF",
            point6: "#FFFFFF",
            point7: "#FFFFFF",
            point8: "#FFFFFF",
            point9: "#FFFFFF",
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={{height: 70, marginTop: 10}}>
                    <View style={styles.headContent}>
                        <View style={[styles.headCircle, {backgroundColor: this.state.point1}]}/>
                        <View style={[styles.headCircle, {backgroundColor: this.state.point2}]}/>
                        <View style={[styles.headCircle, {backgroundColor: this.state.point3}]}/>
                    </View>
                    <View style={styles.headContent}>
                        <View style={[styles.headCircle, {backgroundColor: this.state.point4}]}/>
                        <View style={[styles.headCircle, {backgroundColor: this.state.point5}]}/>
                        <View style={[styles.headCircle, {backgroundColor: this.state.point6}]}/>
                    </View>
                    <View style={styles.headContent}>
                        <View style={[styles.headCircle, {backgroundColor: this.state.point7}]}/>
                        <View style={[styles.headCircle, {backgroundColor: this.state.point8}]}/>
                        <View style={[styles.headCircle, {backgroundColor: this.state.point9}]}/>
                    </View>
                </View>
                <OkGesturePassword
                    style={styles.gesturePassword}
                    pointBackgroundColor={'white'}
                    showArrow={false}
                    color={'#1F67B9'}
                    activeColor={'#1F67B9'}
                    warningColor={'red'}
                    warningDuration={0}
                    allowCross={false}
                    onMove={(p) => {
                        console.log("onMove:" + p);
                        this._changeHeadPoint(p);
                    }}
                    onFinish={(password) => {
                        Alert.alert("密码",password);
                        this._resetHeadPoint();
                    }}
                />
            </View>
        )
    }
    _resetHeadPoint = () => {
        this.setState({
            point1: "#FFFFFF",
            point2: "#FFFFFF",
            point3: "#FFFFFF",
            point4: "#FFFFFF",
            point5: "#FFFFFF",
            point6: "#FFFFFF",
            point7: "#FFFFFF",
            point8: "#FFFFFF",
            point9: "#FFFFFF",
        });
    };
    _changeHeadPoint = (point) => {
        switch (point + 1) {
            case 1:
                this.setState({
                    point1: '#1F67B9'
                });
                break;
            case 2:
                this.setState({
                    point2: '#1F67B9'
                });
                break;
            case 3:
                this.setState({
                    point3: '#1F67B9'
                });
                break;
            case 4:
                this.setState({
                    point4: '#1F67B9'
                });
                break;
            case 5:
                this.setState({
                    point5: '#1F67B9'
                });
                break;
            case 6:
                this.setState({
                    point6: '#1F67B9'
                });
                break;
            case 7:
                this.setState({
                    point7: '#1F67B9'
                });
                break;
            case 8:
                this.setState({
                    point8: '#1F67B9'
                });
                break;
            case 9:
                this.setState({
                    point9: '#1F67B9'
                });
                break;

        }
    };

}

const styles = StyleSheet.create({
    gesturePassword: {
        backgroundColor: 'white',
    },
    headContent: {
        flex: 1, justifyContent: 'center', flexDirection: 'row'
    },
    headCircle: {
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#1F67B9",
        width: 15,
        height: 15,
        margin: 4,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});