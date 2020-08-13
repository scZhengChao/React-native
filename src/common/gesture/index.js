import React ,{component,PureComponent} from 'react'
import OkGesturePassword   from './OkGesturePassword'
import GesturePassword from './PasswordGesture'
import {
    Platform, 
    StyleSheet, 
    Text, 
    View, 
    Alert,
    Dimensions
} from 'react-native'

const width = Dimensions.get('window').width;
export default class Gesture extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render(){
        return(
            <View style={styles.container}>
               {/* <OkGesturePassword></OkGesturePassword> */}
               <GesturePassword style={styles.gesturePassword}></GesturePassword>
            </View>
        )
    }

   

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    gesturePassword:{
        width:width,
        marginLeft:100
    }
});