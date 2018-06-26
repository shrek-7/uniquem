import React, {Component} from 'react';
import {View, TouchableOpacity,Text,Image} from 'react-native';

export default class ListItem extends Component{
    render(){
        return(
            <TouchableOpacity onPress={()=>this.props.onPress(this.props.data)} style={{width:'49%'}}>
                <View style={styles.containerStyle}>
                        <View style={styles.listItemStyle}>
                            <Image
                                style={styles.iconStyle}
                                source={this.props.data.image}
                            />
                            <Text style={styles.nameStyle}>{this.props.data.name}</Text>
                            <Text style={styles.priceStyle}>
                                Rs {this.props.data.price} / {this.props.data.unit}
                            </Text>
                        </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = {
    containerStyle: {
        borderWidth: 1,
        padding: 20,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        position: 'relative',
        marginBottom: 5,
        marginLeft:6,
        marginRight: 5,
        width:'100%'
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
        textAlign: 'center'
    }
}