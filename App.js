import React, {Component} from 'react' ;
import {
          AppRegistry,
          StyleSheet,
          Text,
           View,
           Dimensions,
           PixelRatio,
           StatusBar
} from 'react-native' ;

// 获取屏幕长度

var ScreenWidth = Dimensions.get( 'window').width;
var ScreenHeight = Dimensions.get( 'window').height;

export default class OZCalculator extends Component{
      render(){
            return(
                <View style={styles.container}>
                      <View style={styles.searchbar}>
                          
                             <Text>搜索框</Text>
                      </View>
                      <View style={styles.lunbo}>
                             <Text>轮播广告</Text>
                      </View>
                      <View style={styles.products}>
                             <Text>商品列表</Text>
                      </View>
                       <View style={styles.menu}>
                             <Text>菜单栏</Text>
                      </View>
                </View>
                );
          }
   }
const styles = StyleSheet.create({
     container:{
         flex:1,
     },
     searchbar:{

         height:40,
         backgroundColor: 'white',
         justifyContent: 'center' ,
         alignItems: 'center' ,
         flexDirection:'row'
      },
      lunbo: {
         height:160,
         backgroundColor: 'blue',
         justifyContent: 'center' ,
         alignItems: 'center' ,
       },
       products:{
          flex:1,
          backgroundColor: '#c9cacc',
          justifyContent: 'center' ,
         alignItems: 'center' ,
       },
       menu:{
           height:60,
           backgroundColor: '#fa8c13',
           justifyContent: 'center' ,
           alignItems: 'center' ,
       },

});
