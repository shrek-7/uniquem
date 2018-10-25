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
                <TouchableOpacity onPress={()=>Actions.dashboard({category:'dairy'})}>
                    <View style={styles.listStyle}> 
                        <Text style={styles.textStyle}>Home</Text>
                        <Image
                            style={styles.iconStyle}
                            source={home}
                        />                                  
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Actions.cartPage()}>
                    <View style={styles.listStyle}>
                        <Text style={styles.textStyle}>My Cart</Text>    
                        <Image
                            style={styles.iconStyle}
                            source={cart}
                        />                                  
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.listStyle}>
                        <Text style={styles.textStyle}>My Orders</Text>
                        <Image
                            style={styles.iconStyle}
                            source={order}
                        />                                   
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.listStyle}>
                        <Text style={styles.textStyle}>About Us</Text>      
                        <Image
                            style={styles.iconStyle}
                            source={smile}
                        />                             
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Actions.login()}>
                    <View style={styles.listStyle}>                  
                        <Text style={styles.textStyle}>Logout</Text>
                        <Image
                            style={styles.iconStyle}
                            source={logout}
                        />                 
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles={
    container: {
        height: '100%',
        backgroundColor: '#FFF',
    },
    listStyle:{
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textStyle:{
        color:'#000',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10
    },
    iconStyle:{
        height:20,
        width: 20,
    }
}