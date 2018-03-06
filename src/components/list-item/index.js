import React, {Component} from 'react';
import {View} from 'react-native';

export default class ListItem extends Component{
    render(){
        return(
            <View style={styles.containerStyle}>
                {this.props.children}
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        borderRadius: 8,
        borderWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
        marginBottom: 5,
        marginLeft:5,
        marginRight: 5,
        height: 100,
        alignItems:'center'
    }
}