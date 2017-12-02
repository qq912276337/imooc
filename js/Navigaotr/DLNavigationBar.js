/**
 * Created by sml2 on 2017/11/30.
 */
import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet,Platform, StatusBar, } from "react-native";
import PropTypes from 'prop-types'

const NAVIBAR_HEIGHT_IOS = 44;
const NAVIBAR_HEIGHT_ANDROID = 50;
const StatusBarShape={
    backgroundColor:PropTypes.string,
    barStyle:PropTypes.oneOf(['default','light-content','dark-content']),
    hidden:PropTypes.bool,
};

class DLNavigationBar extends Component {
    static propTypes = {
        style: View.propTypes.style,
        title:PropTypes.string,
        titleView:PropTypes.element,
        hide:PropTypes.bool,
        leftButton:PropTypes.element,
        rightButton:PropTypes.element,
        statusBarShape:PropTypes.shape(StatusBarShape),
    }
    static defaultProps={
        statusBarShape:{
            barStyle:'light-content',
            hidden:false,
        }
    }

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            title:'',
            hide:false,
        };
      }
    
    render(){
        var statuBar = <View style={[styles.statuBarStyle,this.props.statusBarShape]}>
            <StatusBar
                {...this.props.statusBarShape}
            />
        </View>
        var titleView = this.props.titleView ? this.props.titleView : <Text style={styles.titleStyle}>{this.props.title}</Text>
        var naviBar = <View style={[styles.naviBarStyle,this.props.style]}>
            {this.props.leftButton}
            <View style={styles.titleViewStyle}>{titleView}</View>
            {this.props.rightButton}
        </View>
        return(
            <View style={[styles.containerStyle,this.props.style]}>
                {statuBar}
                {naviBar}
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    containerStyle:{

    },
    statuBarStyle:{
        height:Platform.OS == 'ios' ? 20 : 0,
        backgroundColor:'red',
    },
    naviBarStyle:{
        backgroundColor:'red',
        justifyContent:'space-between',
        alignItems:'center',
        height:Platform.OS == 'ios' ? NAVIBAR_HEIGHT_IOS : NAVIBAR_HEIGHT_ANDROID,
        flexDirection:'row',

    },
    titleViewStyle:{
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        left:40,
        right:40,
        top:0,
        bottom:0,
    },
    titleStyle:{
        fontSize:20,
        color:'white',
    }

})

export default DLNavigationBar;