/**
 * Created by sml2 on 2017/12/2.
 */
import React, { Component } from "react";
import { View, Text,StyleSheet,Image, TouchableOpacity } from "react-native";

class DLPopularCell extends Component {
    render(){
        return(
            <TouchableOpacity onPress={()=>{
                    if(this.props.clickHandler){
                        this.props.clickHandler(this.props.item);
                    }
            }}>
                <View style={[styles.containerStyle,this.props.style]}>
                    <Text style={styles.titleStyle}>{this.props.item.full_name}</Text>
                    <Text style={styles.descStyle}>{this.props.item.description}</Text>
                    <View style={styles.bottomViewStyle}>
                        <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <Text style={{fontSize:14}}>Author:</Text>
                            <Image style={{width:20,height:20}} source={{uri:this.props.item.owner.avatar_url}} />
                        </View>

                        <Text style={{fontSize:14}}>Stars:{this.props.item.stargazers_count}</Text>

                        <Image style={{width:20,height:20,backgroundColor:'red'}} />
                    </View>
                </View>
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    containerStyle:{
        // height:100,
        padding:8,
    },
    titleStyle:{
        fontSize:16,
        color:'black',
        paddingBottom:4,
    },
    descStyle:{
        fontSize:14,
        color:'gray',
    },
    bottomViewStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:4,
    }
});

export default DLPopularCell;