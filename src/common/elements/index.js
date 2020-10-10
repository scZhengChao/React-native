import React, { Component } from 'react'
import {  View,Image,StyleSheet ,Animated,ScrollView } from 'react-native'
import { CheckBox , Divider,Icon ,Input ,AirbnbRating ,Rating  ,SearchBar,Slider ,Tile,Tooltip,Text  } from 'react-native-elements'


class Elements extends Component {
    static navigationOptions = ({navigation})=>{
        return {
            title:'elementsUi库'
        }
    }
    constructor(props){
        super(props)
        this.state={
            checked:false,
            ratingCompleted:null,
            search: '',
            Slider:'',
        }
    }
    updateSearch = (search) => {
        this.setState({ search });
    };
    setValue=(data)=>{
        this.setState({
            Slider:data
        })
    }
    render() {
        return (
        <View style={{flex:1,}}>
            <ScrollView style={{flex:1}}>
                
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
                    onPress={() => this.setState({checked: !this.state.checked})}
                />
                <Divider style={{ backgroundColor: 'blue' }} />
          
                <Icon
                    name='g-translate'
                    color='#00aced' 
                />

                <Icon
                    raised
                    name='heartbeat'
                    type='font-awesome'
                    color='#f50'
                    onPress={() => console.log('hello')} 
                />
                <Input
                    placeholder='INPUT WITH CUSTOM ICON'
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='black'
                        />
                    }
                />

                <AirbnbRating
                    count={11}
                    reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
                    defaultRating={11}
                    size={20}
                />

                <Rating
                    showRating
                    onFinishRating={this.ratingCompleted}
                    style={{ paddingVertical: 10 }}
                />
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={this.state.search}
                />
                <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
                    <Slider
                        value={this.state.Slider}
                        onValueChange={this.setValue}
                        maximumValue={50}
                        minimumValue={20}
                        step={1}
                        trackStyle={{ height: 10, backgroundColor: 'green' }}
                        thumbStyle={{ height: 20, width: 20, backgroundColor: 'orange' }}
                        thumbProps={{
                        children: (
                            <Icon
                                name="heartbeat"
                                type="font-awesome"
                                size={20}
                                reverse
                                containerStyle={{ bottom: 20, right: 20 }}
                                color="#f50"
                            />
                        ),
                        }}
                    />
                    <Text>Value: {this.state.Slider}</Text>
                </View>
                <Tile
                    imageSrc={require('../../assets/timg.png')}
                    icon={{ name: 'play-circle', type: 'font-awesome' }}
                    featured
                    activeOpacity={1}
                    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
                    caption="Some Caption Text"
                />
                <View>
                    <Tooltip 
                        withOverlay={false}
                        popover={<Text>Info sasfasf sfasf  here</Text>}
                    >
                        <Text>Press me</Text>
                    </Tooltip>
                </View>
                
            </ScrollView>
        </View>
        )
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



export default Elements
