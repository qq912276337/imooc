/**
 * Created by sml2 on 2017/12/5.
 */
import React, { Component } from "react";
import { View, Text, Animated, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native'

var Width = Dimensions.get('window').width;
var Height = Dimensions.get('window').height;
class DLPullSlideView extends Component{
    constructor(props) {
        super(props);
        this.state = {
            show:false,
        };
    }

    slideValue = new Animated.Value(0);

    render(){
        const animateBackgroundColor = this.slideValue.interpolate({
            inputRange:[0,1],
            outputRange: ['transparent', 'rgba(1,1,1,0.4)']
        });
        var translateH = 444;
        const translateY = this.slideValue.interpolate({
            inputRange:[0,1],
            outputRange: [-translateH, 0]
        });

        return (
            <View style={{zIndex:1}}>
                <View style={{zIndex:1}}>
                    <Text onPress={this.show} style={{height:44,backgroundColor:'gray'}}>click</Text>
                </View>
                {this.state.show && <Animated.View style={[styles.animatedCover, {backgroundColor:animateBackgroundColor},{
                            transform: [
                              { perspective: 1000 }
                            ]
                          }]}>
                    <TouchableOpacity activeOpacity={1} style={{flex: 1}} onPress={this._close}>
                        <Animated.View style={[styles.animatedContent, {top: translateY},{
                            transform: [
                              { perspective: 1000 }
                            ]
                          }]}>
                            <View style={{backgroundColor:'red',height:translateH}}>
                                <Text>12345</Text>
                                <Text>12345</Text>
                                <Text>12345</Text>
                                <Text>12345</Text>
                                <Text>12345</Text>
                            </View>
                        </Animated.View>
                    </TouchableOpacity>
                </Animated.View>
                }
            </View>
        )
    }

    show = () => {
        this.setState({show: true}, () => {
            Animated.timing(this.slideValue, {
                toValue: 1,
                duration: 250,
            }).start()
        })
    }

    _close = () => {
        Animated.timing(this.slideValue, {
            toValue: 0,
            duration: 250,
        }).start(() => this.setState({show: false}))
    }

}

const styles = StyleSheet.create({
    animatedCover: {
        position: 'absolute',
        top: 44,
        left: 0,
        right: 0,
        height: Height,
    },
    animatedContent: {
        position: 'absolute',
        left: 0,
        right: 0,
    },
})


export default DLPullSlideView;