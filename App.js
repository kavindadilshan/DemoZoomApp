/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,TouchableOpacity
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import page1 from './page1';
import page2 from './page2';


class App extends React.Component {




    render() {
        return (
            <>
                <AppContainer/>
            </>
        );
    }




};

export const ContactStack = createStackNavigator({
    page1: {
        screen: page1,

    },
    page2: {
        screen: page2,

    },
})

const AppContainer = createAppContainer(ContactStack);

export default App;
