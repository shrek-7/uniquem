import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const {textStyle, viewStyle}=styles;

        return (
            <View style={viewStyle}> 
                <Text style={textStyle}> 
                    {props.title}
                </Text>
            </View>
        );
        }
const styles ={
    viewStyle:{
        backgroundColor: '#08298A',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        elevation: 6,
        position: 'relative',
        marginBottom: 5
    },
    textStyle:{
        fontSize:20,
        color: '#fff',
        fontWeight:'bold'
    }
} 
export default Header;