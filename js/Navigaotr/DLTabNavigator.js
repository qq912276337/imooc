/**
 * Created by sml2 on 2017/11/29.
 */
import React from 'react';
import { View, Text,Image, StyleSheet,Button } from 'react-native';
import {TabNavigator} from 'react-navigation'

class MyHomeScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
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
                <Button style={{backgroundColor:'red'}}
                        onPress={() => this.props.navigation.navigate('DLNotifications')}
                        title="Go to notifications"
                />
            </View>
        );
    }
}

class MyHomeScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
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
                <Button style={{backgroundColor:'red'}}
                        onPress={() => this.props.navigation.navigate('DLNotifications')}
                        title="Go to notifications"
                />
            </View>
        );
    }
}


class MyHomeScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
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
                <Button style={{backgroundColor:'red'}}
                        onPress={() => this.props.navigation.navigate('DLNotifications')}
                        title="Go to notifications"
                />
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
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back home"
                />
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
        justifyContent:'center',
        alignItems:'center',

    }
});

const tabNavigator = TabNavigator({
    DLHome: {
        screen: MyHomeScreen,
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
});

export default tabNavigator;
