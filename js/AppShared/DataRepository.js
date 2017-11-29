/**
 * Created by sml2 on 2017/11/8.
 */
//
// export default class DataRepository{
//     fetchNetData(url){
//         return new Promise((resolveHandler,rejectHandler)=>{
//             fetch(url)
//                 .then(response=>response.json())
//                 .then(result=>{
//                     if(resolveHandler){
//                         resolveHandler(result)
//                     }
//                 })
//                 .catch(error=>{
//                     if(rejectHandler){
//                         rejectHandler(error)
//                     }
//                 })
//         })
//     }
// }


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Image,
    NavigatorIOS,
    RefreshControl,
    ActivityIndicator
} from 'react-native';

import Util from './util';
import Recommend from './read/recommend';
import Category from './read/category';
import Search from './read/search';
import Topic from './read/topic';

export class Read extends Component{
    constructor(props) {
        super(props);
        this.state  ={
            recommendTopic: null,
            hotTopic:null,
            category: null,
            other:null,
        }
    }


    render(){
        return(
            <View style={styles.container}>
                <Search navigator={this.props.navigator}></Search>
                <ScrollView style={styles.c}>

                    <RefreshControl refreshing={this.state.refreshing} onRefresh={this._refresh.bind(this)}></RefreshControl>
                    <Topic navigator={this.props.navigator} data={this.state.recommendTopic}></Topic>
                    <HrLine/>
                    <Recommend title="热门推荐" data={this.state.hotTopic} navigator={this.props.navigator} type="it"/>
                    <HrLine/>
                    <Category data={this.state.category} navigator={this.props.navigator}/>
                    <HrLine/>
                    <Recommend title="清新一刻" data={this.state.other} navigator={this.props.navigator} type="sanwen"/>
                    <Space/>
                </ScrollView>

                <View/>

                );
                }


                _refresh(){
                Util.get('http://123.57.39.116:3000/data/read?type=config',
                    function (response){
                        if(response.status){
                            let obj = response.data;
                            self.setState(
                                {
                                    recommendTopic: obj.recommendTopic,
                                    hotTopic: obj.hotTopic,
                                    category: obj.category,
                                    other: obj.other,
                                    refreshing: false,
                                    isShow: true
                                }
                            );
                        }else{
                            alert('服务异常,正在紧急修复,请耐心等待');
                        }
                    },function (error) {
                        alert('服务异常,正在紧急修复,请耐心等待');
                    })
            }

                }
}
