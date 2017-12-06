/**
 * Created by sml2 on 2017/12/5.
 */
import React, { Component } from "react";
import { View, Text, Animated, TouchableOpacity, StyleSheet,Dimensions, Platform } from "react-native";
import PropTypes from 'prop-types';
var Width = Dimensions.get('window').width;
var Height = Dimensions.get('window').height;
class DLPullSlideView extends Component{
    static propTypes={
        renderTargetView:PropTypes.func.isRequired,
        renderContentView:PropTypes.func.isRequired,
        fromViewHeight:PropTypes.number.isRequired,
        contentViewHeight:PropTypes.number.isRequired,

    }

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
        var translateH = this.props.contentViewHeight;
        const translateY = this.slideValue.interpolate({
            inputRange:[0,1],
            outputRange: [-translateH, 0]
        });

        var animatedCoverAndroid = [styles.animatedCoverAndroid, {backgroundColor:animateBackgroundColor}];
        var animatedContentAndroid = [styles.animatedContentAndroid,{height:this.props.contentViewHeight}, {top: 0}];

        var animatedCoverIOS = [styles.animatedCoverIOS, {backgroundColor:animateBackgroundColor},{top:this.props.fromViewHeight}];
        var animatedContentIOS = [styles.animatedContentIOS,{top: translateY}];

        var animatedCover = Platform.OS == 'ios' ? animatedCoverIOS : animatedCoverAndroid;
        var animatedContent = Platform.OS == 'ios' ? animatedContentIOS : animatedContentAndroid;

        return (
            <View style={{zIndex:1}}>
                <View style={{zIndex:1}}>
                    <TouchableOpacity activeOpacity={1} onPress={this._show}>
                        {this.props.renderTargetView()}
                    </TouchableOpacity>
                </View>
                {this.state.show && <Animated.View style={animatedCover}>
                    <TouchableOpacity activeOpacity={1} style={{flex: 1}} onPress={this._close}>
                        <Animated.View style={animatedContent}>
                            {this.props.renderContentView()}
                        </Animated.View>
                    </TouchableOpacity>
                </Animated.View>
                }
            </View>
        )
    }

    _show = () => {
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
    animatedCoverAndroid: {
        top: 0,
        left: 0,
        right: 0,
        height: Height,
    },
    animatedContentAndroid: {
        left: 0,
        right: 0,
        height:222,
    },
    animatedCoverIOS: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: Height,
    },
    animatedContentIOS: {
        position: 'absolute',
        left: 0,
        right: 0,
    },
})


export default DLPullSlideView;


