import React,{Component} from 'react';
// import TimerMixin from 'react-timer-mixin';
// import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
import {View, Text, ActivityIndicator, Image, TouchableOpacity} from 'react-native';
// import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

// import {emailChanged, passwordChanged, loginUser} from '../../actions';

// const loader = require('../../assets/31.gif');

import dairy from '../../assets/dairy.jpeg';
import grocery from '../../assets/fruits.jpg';

export default class LandingPage extends Component{

    constructor(){
        super()

        this.state = {
        };
    }

    render(){
        return(
            <View style={styles.containerStyle}>
                <View style={styles.categoryContainer}>
                    <View style={styles.categoryText}>
                        <Text style={styles.TextStyle}>Dairy</Text>
                        <Text style={styles.TextStyle}>Products</Text>
                        <Text style={styles.subtextStyle}>Milk, curd, paneer...</Text>
                    </View>
                    <TouchableOpacity onPress={()=>Actions.dashboard({category:'dairy'})}>
                        <Image style={styles.backgroundStyle} source={dairy}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.categoryContainer}>
                    <View style={styles.categoryText}>
                        <Text style={styles.TextStyle}>Fruits &</Text>
                        <Text style={styles.TextStyle}>Vegetables</Text>
                    </View>
                    <TouchableOpacity onPress={()=>Actions.dashboard({category:'grocery'})}>
                        <Image style={styles.backgroundStyle} source={grocery}/>
                    </TouchableOpacity>
                </View>   
            </View>
        );
    }
}

const styles ={
    containerStyle:{
        height: '100%',
        backgroundColor:"#F1F8E9",
        paddingBottom:0
    },
    categoryContainer: {
        height:'50%',
        elevation:2,
        position:'relative',
        paddingBottom:5
    },
    backgroundStyle : {
        height:'100%',
        width:'100%',
    },
    categoryText: {
        position:'absolute',
        top:80,
        left:'50%',
        elevation:4
    },
    TextStyle: {
        color:'#fff',
        fontSize:30,
        fontWeight:'bold'
    },
    subtextStyle:{
        color:'#fff'
    }
}

// const mapStateToProps = state => {
//     return{
        
//     };
// }

// export default connect(mapStateToProps, {emailChanged,passwordChanged,loginUser})(LoginPage);