import React, {Component} from 'react';
import {View, TouchableOpacity,Text,Image} from 'react-native';
import { Divider, Button } from 'react-native-elements';

export default class ListItem extends Component{
    render(){
        return(
                <View style={styles.containerStyle}>
                        <View style={styles.listItemStyle}>
                            <Image
                                style={styles.iconStyle}
                                source={this.props.data.image}
                            />
                            
                            <Text style={styles.nameStyle}>{this.props.data.name}</Text>
                        </View>
                            <View style={styles.priceStyleCont}>
                                <Text style={styles.priceStyle}>
                                    Rs {this.props.data.price} / {this.props.data.unit}
                                </Text>
                                <Button
                                    buttonStyle={{padding:5,margin:0}}
                                    icon={{name: 'add-shopping-cart', color: '#000', type: 'materialicons', size:15}}
                                    color='#000'
                                    backgroundColor='#F1FFFF'
                                    underlayColor='#C8FFFF'
                                    onPress={()=>this.props.onPress(this.props.data)}
                                    title='Add' />
                            </View>
                </View>
        );
    }
}

const styles = {
    containerStyle: {
        borderWidth: 1,
        padding: 15,
        backgroundColor: '#FFF',
        borderColor: '#ddd',
        position: 'relative',
        width:'50%'
    },
    iconStyle: {
        height: 70,
        width: 70
    },
    arrowStyle:{
        height: 20,
        width: 20,
        marginLeft: 20
    },
    listItemStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%'
    },
    nameStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#000',
        textAlign: 'center'
    
    },
    priceStyle:{
        fontSize: 12,
        color: '#000',
        width: '50%'
    },
    priceStyleCont :{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10
    }
}