import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
// import {addToCart} from '../../actions';

import { Text, View, Image, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import { Icon } from 'react-native-elements';
import cartEmpty from '../../assets/cart-empty.png';
// import cartFull from '../../assets/shopping-cart.png';
import menu from '../../assets/list.png';
import close from '../../assets/left.png';
import Hamburger from 'react-native-hamburger';


export class Header extends Component{

    constructor(props){
        super(props);

        this.state={
            hamburgerActive:false
        }

        this.onHamburgerClick = this.onHamburgerClick.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.props=nextProps;
        this.setState({hamburgerActive:this.props.hamburgerStatus});
    }

    onHamburgerClick(){
        // this.setState({hamburgerActive:!this.state.hamburgerActive});
        if(this.props.hamburgerStatus){
            this.props.closeDrawer();
        }else{
            this.props.openDrawer();
        }
    }

    render(){
        return (
            <View style={styles.viewStyle}>

                <View>
                    {/* <TouchableOpacity activeOpacity = { .5 } onPress={ this.onHamburgerClick }> */}
                    <Icon
                        name={this.props.hamburgerStatus?'cross':'menu'}
                        type='entypo'
                        onPress={ this.onHamburgerClick }
                        underlayColor ='#C8FFFF'
                        size={28}
                    />
                        {/* <Image
                            style={styles.menuStyle}
                            source={this.props.hamburgerStatus?close:menu}
                        /> */}
                    {/* </TouchableOpacity> */}
                </View>
                <Text style={styles.textStyle}> 
                    {this.props.title}
                </Text>
                    <View style={styles.cartContainer}>
                            <Icon
                                name='shopping-cart'
                                type='evilicons'
                                size={28}
                                onPress={()=>Actions.cartPage()}
                            />
                            {Object.keys(this.props.cart.data).length>0?
                                <View style={styles.cartCounter}>
                                    <Text style={styles.cartContainerText}>
                                        {Object.keys(this.props.cart.data).length}
                                    </Text>
                                </View>
                                :<Text></Text>
                            }  
                        
                    </View>
                
            </View>
        );
    }
}

const styles ={
    viewStyle:{
        backgroundColor: '#E1FFFF',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        elevation: 4,
        position: 'relative',
        paddingRight:15,
        paddingLeft: 10,
        overflow: 'visible'
    },
    textStyle:{
        fontSize:20,
        color: '#000',
        fontWeight:'bold'
    },
    cartStyle: {
        width:30,
        height:30,
        overflow: 'visible'
    },
    menuStyle: {
        width:25,
        height:20
    },
    cartContainer: {
        position:'relative'
    },
    cartCounter: {
        borderRadius: 10,
        borderWidth:1,
        borderColor: '#000',
        position:'absolute',
        top:-8,
        right:-7,
        height: 20,
        width: 20,
        backgroundColor: '#E1FFFF',
        flexDirection:'row',
        justifyContent:"center"
    },
    cartContainerText:{
        color:'#000'
    }
}
const mapStateToProps = state => {
    return{
        cart: state.cart
    };
}

export default connect(mapStateToProps, {})(Header);