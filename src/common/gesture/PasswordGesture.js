var PasswordGesture = require('react-native-gesture-password');
import React ,{component,PureComponent} from 'react'
import {
    StyleSheet,View,Text
} from 'react-native'
export default class MyPasswordGesture  extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            message: 'Please input your password.',
            status: 'normal'
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {/* <Text>asfasf11111111</Text> */}
                <PasswordGesture
                    ref='pg'
                    status={this.state.status}
                    message={this.state.message}
                    onStart={() => this.onStart()}
                    onEnd={(password) => this.onEnd(password)}
                />
            </View>
           
        );
    }
    onEnd=(password)=> {
        if (password == '123') {
            this.setState({
                status: 'right',
                message: 'Password is right, success.'
            });

            // your codes to close this view
        } else {
            this.setState({
                status: 'wrong',
                message: 'Password is wrong, try again.'
            });
        }
    }
    onStart=()=>{
        this.setState({
            status: 'normal',
            message: 'Please input your password.'
        });
    }
    onReset=()=>{
        this.setState({
            status: 'normal',
            message: 'Please input your password (again).'
        });
    }
    // onEnd=(password)=>{
    //     if ( Password1 === '' ) {
    //         // The first password
    //         Password1 = password;
    //         this.setState({
    //             status: 'normal',
    //             message: 'Please input your password secondly.'
    //         });
    //     } else {
    //         // The second password
    //         if ( password === Password1 ) {
    //             this.setState({
    //                 status: 'right',
    //                 message: 'Your password is set to ' + password
    //             });

    //             Password1 = '';
    //             // your codes to close this view
    //         } else {
    //             this.setState({
    //                 status: 'wrong',
    //                 message:  'Not the same, try again.'
    //             });
    //         }
    //     }
    // }
    // onStart=()=>{
    //     if ( Password1 === '') {
    //         this.setState({
    //             message: 'Please input your password.'
    //         });
    //     } else {
    //         this.setState({
    //             message: 'Please input your password secondly.'
    //         });
    //     }
    // }
  
}
const styles = StyleSheet.create({
    gesturePassword: {
        backgroundColor: 'white',
    },
    container:{
        flex:1,
        width:'100%',
        // backgroundColor:'red'
    }
})