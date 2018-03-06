import React,{Component} from 'react';
import {View} from 'react-native';

export default class Card extends Component{
    render(){
        return(
            <View style={styles.containerStyle}>
            {this.props.children}
            </View>
        );
    }
}

const styles ={
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        elevation: 1,
        marginLeft: 10,
        marginTop: 5,
        marginRight: 10,
        marginBottom:10
    }
}
