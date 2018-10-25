import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateCart,removeFromCart} from '../../actions';

import { Text, View, Image, TouchableOpacity, ScrollView, Button, LayoutAnimation} from 'react-native';
import Counter from '../../components/counter';
import close from '../../assets/close-dark.png';
import rupee from '../../assets/currency.png';
import face from '../../assets/face_icon.png';
// import Hamburger from 'react-native-hamburger';


export class CartPage extends Component{

    constructor(props){
        super(props);

        this.state={
            data:{},
            emptyCart:false
        }
        this.renderData = this.renderData.bind(this);   
        this.placeOrder = this.placeOrder.bind(this);
        this.updateCounter = this.updateCounter.bind(this);
        this.orderTotal = 0; 
    }

    componentWillUpdate(){
        LayoutAnimation.spring();
    }

    componentDidMount() {
        if(Object.keys(this.props.cart.data).length==0){
            this.setState({emptyCart:true})
        }
    }

    placeOrder(){
        if(this.state.emptyCart){
            return
        }
    }

    componentWillReceiveProps(nextProps){
        this.props=nextProps;
        if(Object.keys(this.props.cart.data).length==0){
            this.setState({emptyCart:true})
        }else{
            this.setState({data: this.props.cart.data,emptyCart:false});
        }  
    }

    updateCounter(count,value) {
        let obj={}
        obj.product={name:value}
        obj.quantity=count
        this.props.updateCart(obj);
    }


    renderData() {
        this.orderTotal=0;
        if(Object.keys(this.props.cart.data).length!==0){
            return Object.keys(this.props.cart.data).map(item =>{
                this.orderTotal += this.props.cart.data[item].quantity*this.props.cart.data[item].price 
                return (
                        <View key={item} style={styles.listItemStyle}>
                            <Text style={styles.listNameStyle}>{item}</Text>
                            <Counter updateCounter={this.updateCounter} data={item} value={this.props.cart.data[item].quantity}/>
                            <View style={styles.priceContainerStyle}>
                                <Image source={rupee} style={styles.currencyStyle}/>
                                <Text style={styles.listPriceStyle}>{this.props.cart.data[item].quantity*this.props.cart.data[item].price}</Text>
                            </View>
                            <TouchableOpacity onPress={()=>this.props.removeFromCart(item)}>
                                <Image source={close} style={styles.closeStyle}/>
                            </TouchableOpacity>
                        </View>)
            })
        }else{
            return (
                <View style={styles.emptyCartStyle}>
                    <Image source={face}/>
                    <Text>Your cart is empty!</Text>
                    <Text>ADD ITEM TO PLACE ORDER</Text>
                </View>
            )
        }
    }

    render(){
        return (
            <View style={styles.containerStyle}>
                <ScrollView style={{marginBottom:50}}>
                    {this.renderData()}
                </ScrollView>
                <View style={this.state.emptyCart?styles.disableOrderStyle:styles.orderButtonCont}>
                        <TouchableOpacity>
                                <Text style={{color:'#000',fontSize:15,fontWeight:'bold'}}>PLACE ORDER</Text>
                        </TouchableOpacity>
                        <Text style={{color:'#000',fontSize:15}}>Total: Rs {this.orderTotal}</Text>
                </View>
            </View>
        );
    }
}

const styles ={
    listItemStyle:{
        backgroundColor: '#fff',
        padding: 15,
        elevation:2,
        margin:4,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        position: 'relative',
        paddingRight: 15,
        paddingLeft:0,
        marginBottom: 4
    },
    containerStyle: {
        backgroundColor:'#FFF',
        height:'100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        position:'relative',
        width:'100%'
    },
    listNameStyle: {
        margin:5,
        width: '30%',
        color:'#000',
        fontSize: 17
    },
    listPriceStyle : {
        color:'#000'
    },
    closeStyle : {
        height: 15,
        width: 15
    },
    currencyStyle :{
        height: 10,
        width: 10
    },
    priceContainerStyle: {
        flexDirection:'row',
        alignItems: 'center',
        padding:2
    },
    orderButtonCont: {
        position: 'absolute',
        bottom: 0,
        width:'100%',
        backgroundColor:'#ABFF73',
        flexDirection:'row',
        justifyContent:'space-around',
        padding:15
    },
    disableOrderStyle:{
        position: 'absolute',
        bottom: 0,
        width:'100%',
        backgroundColor:'grey',
        flexDirection:'row',
        justifyContent:'space-around',
        padding:10
    },
    emptyCartStyle: {
        paddingTop:'20%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }
}
const mapStateToProps = state => {
    return{
        cart: state.cart
    };
}

export default connect(mapStateToProps, {updateCart,removeFromCart})(CartPage);