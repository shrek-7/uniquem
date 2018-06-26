import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';

import home from '../../assets/home.png';
import cart from '../../assets/cart.png';
import order from '../../assets/order.png';
import smile from '../../assets/smile.png';
import logout from '../../assets/logout.png';

export default class SideMenu extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>Actions.landingPage()}>
                    <View style={styles.listStyle}> 
                        <Image
                            style={styles.iconStyle}
                            source={home}
                        />                  
                        <Text style={styles.textStyle}>Home</Text>                
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Actions.cartPage()}>
                    <View style={styles.listStyle}>
                        <Image
                            style={styles.iconStyle}
                            source={cart}
                        />                   
                        <Text style={styles.textStyle}>My Cart</Text>                
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.listStyle}>
                        <Image
                            style={styles.iconStyle}
                            source={order}
                        />                   
                        <Text style={styles.textStyle}>My Orders</Text>                
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.listStyle}>
                        <Image
                            style={styles.iconStyle}
                            source={smile}
                        />                   
                        <Text style={styles.textStyle}>About Us</Text>                
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Actions.login()}>
                    <View style={styles.listStyle}>
                        <Image
                            style={styles.iconStyle}
                            source={logout}
                        />                   
                        <Text style={styles.textStyle}>Logout</Text>                
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles={
    container: {
        height: '100%',
        backgroundColor: '#B2EBF2',
    },
    listStyle:{
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: '#fff',
        flexDirection: 'row'
    },
    textStyle:{
        color:'#000',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 30
    },
    iconStyle:{
        height:20,
        width: 20,
    }
}