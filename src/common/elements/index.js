import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import { CheckBox } from 'react-native-elements'


export class Elements extends Component {
    constructor(props){
        super(props)
        this.state={
            checked:false
        }
    }
    render() {
        return (
            <View>
                
                <CheckBox
                title='Click Here'
                checked={this.state.checked}
                />

                <CheckBox
                center
                title='Click Here'
                checked={this.state.checked}
                />

                <CheckBox
                center
                title='Click Here'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                />

                <CheckBox
                    center
                    title='Click Here to Remove This Item'
                    iconRight
                    iconType='material'
                    checkedIcon='clear'
                    uncheckedIcon='add'
                    checkedColor='red'
                    checked={this.state.checked}
                />

                {/* <CheckBox
                checkedIcon={<Image source={require('../../assets/timg.png')} />}
                    uncheckedIcon={<Image source={require('../../assets/timg.png')} />}
                    checked={this.state.checked}
                    onPress={() => this.setState({checked: !this.state.checked})}
                /> */}
            </View>
        )
    }
}

export default Elements
