/**
 * Created by sml2 on 2017/11/29.
 */
import React from 'react';
import { View, Text,Image, StyleSheet,Button,TouchableOpacity } from 'react-native';
import {TabNavigator} from 'react-navigation';
import DLNavigationBar from './DLNavigationBar'

import PopularScreen from '../Modules/Popular/Popular';
import SpringAnimate from '../Other/SpringAnimate';


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
                <SpringAnimate />
            </View>
        );
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
