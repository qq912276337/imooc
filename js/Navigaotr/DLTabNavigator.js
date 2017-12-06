/**
 * Created by sml2 on 2017/11/29.
 */
import React from 'react';
import { View, Text,Image, StyleSheet,Button,TouchableOpacity } from 'react-native';
import {TabNavigator} from 'react-navigation';
import DLNavigationBar from './DLNavigationBar'

import PopularScreen from '../Modules/Popular/Popular';
import SpringAnimate from '../Other/SpringAnimate';
import DLPullSlideView from '../Common/DLPullSlideView'

class Trending extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Trending',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <Image
                // source={require('./chats-icon.png')}
                source={require('../../res/images/table.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View style={[styles.containerStyle,{backgroundColor:'white'}]}>

                 <View style={{zIndex:2}}>
                     <Text>123123</Text>
                     <Text>123123</Text>
                     <Text>123123</Text>
                     <Text>123123</Text>
                 </View>
                <DLPullSlideView
                    renderTargetView={this._renderTargetView}
                    renderContentView={this._renderContentView}
                    fromViewHeight={88}
                    contentViewHeight={222}
                />
                <Text style={{height:44,backgroundColor:'purple'}}>123123</Text>
                
                
            </View>
        );
    }

    _renderTargetView = ()=>{
        return (<Text style={{height:88,backgroundColor:'gray'}}>click</Text>)
    }

    _renderContentView = ()=>{
        return (<View style={{backgroundColor:'red',height:222}}>
            <Text>12345</Text>
            <Text>12345</Text>
            <Text>12345</Text>
            <Text>12345</Text>
            <Text>12345</Text>
        </View>)
    }
}


class Favorite extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Favorite',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <Image
                // source={require('./chats-icon.png')}
                source={require('../../res/images/table.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View style={styles.containerStyle}>

            </View>
        );
    }
}


class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../res/images/table.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View style={styles.containerStyle}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
    containerStyle:{
        flex:1,
        backgroundColor:'gray',

    }
});

const tabNavigator = TabNavigator({
    Popular: {
        screen: PopularScreen,
    },

    Trending: {
        screen: Trending,
    },

    Favorite: {
        screen: Favorite,
    },
    DLNotifications: {
        screen: MyNotificationsScreen,
    },

}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#e91e63',
    },
    animationEnabled:false,
});

export default tabNavigator;
