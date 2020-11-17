

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,TouchableOpacity
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RNZoomUsBridge, {RNZoomUsBridgeEventEmitter} from '@mokriya/react-native-zoom-us-bridge';
import {ZOOM_APP_KEY, ZOOM_APP_SECRET} from './src/constance/Constance';

class App extends React.Component {

    componentWillMount(): * {
        this.initializeZoomSDK();
    }

    initializeZoomSDK = () => {
        if (!ZOOM_APP_KEY || !ZOOM_APP_SECRET) {
            return false;
        }

        // init sdk
        RNZoomUsBridge.initialize(ZOOM_APP_KEY, ZOOM_APP_SECRET)
            .then(() => {
                alert('SDK Initialized')
            })
            .catch((err) => {
                alert('Failed to initialize Zoom!')
            });
    };

    joinCallHandler(){
        const meetingId = '89176050226';
        const userName = 'udara';
        const meetingPassword = '2287';
        RNZoomUsBridge.joinMeeting(
            meetingId,
            userName,
            meetingPassword,
        ).catch((error) => {
            alert('Failed to start meeting!');
        });
    }


    render() {
        return (
            <>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        <Header/>
                        {global.HermesInternal == null ? null : (
                            <View style={styles.engine}>
                                <Text style={styles.footer}>Engine: Hermes</Text>
                            </View>
                        )}
                        <View style={styles.body}>
                            <TouchableOpacity style={styles.button} onPress={()=>this.joinCallHandler()}>
                                <Text>Zoom call</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }


};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
        alignItems: 'center'
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    button:{
        width:'95%',
        height:50,
        borderRadius:10,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
    }
});

export default App;
