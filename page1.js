import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Page1 extends Component {

    onButtonClick = () => {
        const {navigate} = this.props.navigation;
        navigate('page2');
    };

    render() {
        return (
            <View style={{flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <Text>page1</Text>
                <TouchableOpacity onPress={() => this.onButtonClick()} style={{
                    width: 100,
                    height: 50,
                    backgroundColor: 'red',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text> click me</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Page1;
