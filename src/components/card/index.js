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
        borderColor: '#A6E8FF',
        borderBottomWidth: 0,
        elevation: 3,
        marginLeft: 20,
        marginTop: 5,
        marginRight: 20,
        marginBottom:10,

    }
}
