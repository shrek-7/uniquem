import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default class Button extends Component{
    render(){
        return(
            <TouchableOpacity onPress={this.props.onPress} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>{this.props.children}</Text>
            </TouchableOpacity>
        )
    }
}

styles= {
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#153D6B',
        marginLeft: 40,
        marginRight: 40,
        height:60,
        backgroundColor:'#153D6B',
        justifyContent:'center',
        alignItems:'center',
        padding: 15
    },
    textStyle:{
        color:'#fff',
        fontSize: 16,
        fontWeight: "600"
    }
}