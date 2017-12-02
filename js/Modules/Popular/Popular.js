/**
 * Created by sml2 on 2017/12/2.
 */
import React, { Component } from "react";
import { View, Text, FlatList,Image, StyleSheet,TouchableOpacity } from "react-native";
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'
import DLNavigationBar from '../../Navigaotr/DLNavigationBar';
import DLHTTPUtil from '../../Common/DLHTTPUtil';


const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';

export default class PopularScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'PopularScreen',
        tabBarIcon: ({ tintColor }) => (
            <Image
                // source={require('./chats-icon.png')}
                source={require('../../../res/images/table.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data:[1,2,3],
            loading:false,
        };
      }

    render() {
        return (
            <View style={styles.containerStyle}>
                <DLNavigationBar
                    title='Popular'
                    leftButton={<Text>123</Text>}
                    rightButton={<Text>123</Text>}
                    statusBarShape={{
                        barStyle:'light-content',
                        backgroundColor:'#ee6363',
                    }}
                    style={{backgroundColor:'#ee6363'}}
                >
                </DLNavigationBar>

                <ScrollableTabView
                    renderTabBar={()=><ScrollableTabBar />}
                    tabBarBackgroundColor='#ee6363'
                >
                    <PopularList tabLabel="iOS">iOS</PopularList>
                    <PopularList tabLabel="Android">Android</PopularList>
                    <PopularList tabLabel="Java">JAVA</PopularList>
                    <PopularList tabLabel="JavaScript">Javascript</PopularList>

                </ScrollableTabView>

            </View>
        );
    }
}


class PopularList extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            result:null,
            loading:true,
        };
          this._headerRefresh();
      }

    render(){
        console.log('PopularList render');
        return <FlatList
            data={this.state.result}
            renderItem={(item)=>{
                        return <View style={styles.listItemStyle}>
                                    <Text>{item.item.id}</Text>
                                    <Text>{item.item.name}</Text>
                                </View>
                    }}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this._renderSeparator}
            onRefresh={this._headerRefresh}
            refreshing={this.state.loading}
        />
    }

    _renderSeparator = ()=>{
        return <View style={{height:1,backgroundColor:'white'}}>
        </View>
    }

    _headerRefresh  = ()=>{
        this.setState({
            loading:true,
        },
            this._loadNewData(),
        )
    }
    
    _loadNewData = ()=>{
        var url = URL + this.props.tabLabel + QUERY_STR;
        DLHTTPUtil.GET(url)
            .then((result)=>{
                console.log(result.items);
                this.setState({
                    result:result.items,
                    loading:false,
                })
            })
            .catch((error)=>{

            })
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
    },
    listItemStyle:{
        height:44,
        backgroundColor:'purple',

    }
});