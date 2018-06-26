import React,{Component} from 'react';
import {View, Text, TextInput} from 'react-native';

export default class Input extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.containerStyle}>
                <Text style={styles.labelStyle}>{this.props.label}</Text>
                <TextInput
                    secureTextEntry={this.props.secureTextEntry}
                    underlineColorAndroid="transparent"
                    placeholder={this.props.placeholder}
                    autoCorrect={false}
                    style={styles.inputStyle}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                />
            </View>
        );
    }
}

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        borderBottomWidth:0,
        borderColor: '#fff',
        paddingTop: 10,
        paddingBottom: 10
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 10,
        flex: 1
    },
    containerStyle:{
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
}