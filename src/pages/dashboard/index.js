import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Keyboard} from 'react-native'
import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { Divider, Icon, Button } from 'react-native-elements';

import Drawer from 'react-native-drawer';
import Modal from "react-native-modal";
import SnackBar from 'react-native-snackbar-component'

import Header from '../../components/header';
import Card from '../../components/card';
import ListItem from '../../components/list-item';
import SideMenu from '../../components/side-menu';
import Counter from '../../components/counter';

import {addToCart, updateCart} from '../../actions';

import cross from '../../assets/cross.png';
const arowRight = require('../../assets/next.png');

const SCREEN_HEIGHT  = Dimensions.get('window').height;

const dairyData=[
        {name:"Milk",image:require('../../assets/milk.png'), price:50, unit:"lt"},
        {name:"Curd",image:require('../../assets/curd.png'), price:120, unit:"kg"},
        {name:"Paneer",image:require('../../assets/paneer.png'), price:90, unit:"200 gm"},
        {name:"Ghee",image:require('../../assets/ghee.png'), price:200, unit:"500 ml"},
    ];

const fruitsData=[
    {name:"Grapes",image:require('../../assets/grapes.jpg'), price:50, unit:"kg"},
    {name:"Guava",image:require('../../assets/guava.jpg'), price:50, unit:"kg"},
    {name:"Mango",image:require('../../assets/mango.jpg'), price:50, unit:"kg"},
    {name:"Mosambi",image:require('../../assets/mosambi.jpg'), price:50, unit:"kg"},
    {name:"Pomegranate",image:require('../../assets/pomegranate.jpg'), price:50, unit:"kg"},
    {name:"Watermelon",image:require('../../assets/watermelon.jpg'), price:50, unit:"kg"},
]

const groceryData=[
    {name:"Tomato",image:require('../../assets/tomato.jpg'), price:50, unit:"kg"},
    {name:"Potato",image:require('../../assets/potato.jpg'), price:100, unit:"kg"},
    {name:"Onions",image:require('../../assets/onion.jpg'), price:50, unit:"kg"},
    {name:"Lemon",image:require('../../assets/lemon.jpg'), price:50, unit:"kg"},
    {name:"Mushroom",image:require('../../assets/mushrooms.jpg'), price:50, unit:"kg"},
    {name:"Palak",image:require('../../assets/palak.jpg'), price:50, unit:"kg"},
    {name:"Radish",image:require('../../assets/radish.jpg'), price:50, unit:"kg"},
    {name:"Broccoli",image:require('../../assets/broccoli.jpg'), price:50, unit:"kg"},
    {name:"Cabbage",image:require('../../assets/cabbage.jpg'), price:50, unit:"kg"},
    {name:"Cauliflower",image:require('../../assets/cauliflower.jpg'), price:50, unit:"kg"},
    {name:"Carrot",image:require('../../assets/carrot.jpg'), price:50, unit:"kg"},
    {name:"Beans",image:require('../../assets/beans.jpg'), price:50, unit:"kg"},
    {name:"Parwal",image:require('../../assets/parwal.jpg'), price:50, unit:"kg"},
    {name:"Pumpkin",image:require('../../assets/pumpkin.jpg'), price:50, unit:"kg"},
    {name:"Coriander",image:require('../../assets/coriander.jpg'), price:50, unit:"kg"},
    {name:"Methi",image:require('../../assets/methi.jpg'), price:50, unit:"kg"},
    {name:"Brinjal",image:require('../../assets/brinjal.jpg'), price:50, unit:"kg"},
    {name:"Bottle Gourd",image:require('../../assets/bottle-gourd.jpg'), price:50, unit:"kg"},
    {name:"Bitter Gourd",image:require('../../assets/bitter-gourd.jpg'), price:50, unit:"kg"},
    {name:"Cucumber",image:require('../../assets/cucumber.jpg'), price:50, unit:"kg"},
    {name:"Ginger",image:require('../../assets/ginger.jpg'), price:50, unit:"kg"},
    {name:"Garlic",image:require('../../assets/garlic.jpg'), price:50, unit:"kg"},
    {name:"Chilli",image:require('../../assets/chilli.jpg'), price:50, unit:"kg"},
    {name:"Ladies finger",image:require('../../assets/ladies-finger.jpg'), price:100, unit:"kg"},
];

export class Dashboard extends Component{
    constructor(){
        super()

        this.state={
            data:[],
            open:false,
            offset:100,
            drawerOpen:false,
            hamburgerStatus:false,
            selectedData:'',
            quantityCounter: 1,
            isSnackOpen: false,
            selectedCategory:'dairy'
        }

        this.renderList=this.renderList.bind(this);
        this.openDrawer = this.openDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
        this.onItemClick = this.onItemClick.bind(this);
        this.updateCounter = this.updateCounter.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.onNavBarClick = this.onNavBarClick.bind(this);

        this.navActive=0;
        this.navActiveHighlight=0;
    }

    componentDidMount(){
        if(this.props.category==='grocery') {
            this.setState({data:groceryData,selectedCategory:'grocery'})
        }else {
            this.setState({data:dairyData})
        }
        Keyboard.dismiss();
    }

    updateCounter(value){
        this.setState({quantityCounter: this.state.quantityCounter+value});
    }

    renderList(){
        return this.state.data.map(item => {
            return (
                <ListItem key={item.name} data={item} onPress={this.onItemClick}/>
            );
        });
    }

    openDrawer() {
        this.setState({drawerOpen:true,hamburgerStatus:true});
    }

    closeDrawer(){
        this.setState({drawerOpen:false,hamburgerStatus:false});
    }

    _toggleModal = () =>
    this.setState({ open: !this.state.open, quantityCounter: 1});

    onItemClick(val){
        this.setState({selectedData:val});
        this._toggleModal();
    }

    onNavBarClick(link) {
        switch(link){
            case 'grocery':
            this.setState({data:groceryData,selectedCategory:'grocery'});
            this.navActive='50%'; 
            this.navActiveHighlight='-50%';
            break;

            case 'dairy':
            this.setState({data:dairyData,selectedCategory:'dairy'});
            this.navActive=0;
            break;

            case 'fruits':
            this.setState({data:fruitsData,selectedCategory:'fruits'});
            this.navActive='60%';
            break;
        }
    }

    addToCart(){
        let data={};
        data["product"]=this.state.selectedData;
        data["quantity"]=this.state.quantityCounter;
        if(this.props.cart.data.hasOwnProperty(this.state.selectedData.name)){
            this.props.updateCart(data);
        }else {
            this.props.addToCart(data);
        }
        this.setState({isSnackOpen:true});
        setTimeout(()=>this.setState({isSnackOpen:false}), 10000);
        this._toggleModal();
    }

    render(){
        return(
            <View style={styles.container}>
                <Drawer
                    open={this.state.drawerOpen}
                    type="static"
                    tapToClose={true}
                    openDrawerOffset={0.5} // 50% gap on the right side of drawer
                    closedDrawerOffset={0}
                    content={<SideMenu/>}
                    styles={styles.drawerStyles}
                    tweenHandler={Drawer.tweenPresets.parallax}
                    tweenEasing={"easeInOutQuad"}
                    tweenDuration={400}
                    onClose={this.closeDrawer}
                > 
                    <View style={styles.container}>
                        <Header title="Home" closeDrawer={this.closeDrawer} openDrawer={this.openDrawer} hamburgerStatus={this.state.hamburgerStatus}/>
                        
                        <View style={styles.navBarStyle}>
                            <TouchableOpacity onPress={()=>this.onNavBarClick('dairy')} style={styles.navBarElement}>
                                <Text style={this.state.selectedCategory==='dairy'?styles.navBarElementActive:styles.navBarText}>Milk Products</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>this.onNavBarClick('grocery')} style={styles.navBarElement}>
                                <Text style={this.state.selectedCategory==='grocery'?styles.navBarElementActive:styles.navBarText}>Vegetables</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>this.onNavBarClick('fruits')} style={styles.navBarElement}>
                                <Text style={this.state.selectedCategory==='fruits'?styles.navBarElementActive:styles.navBarText}>Fruits</Text>
                            </TouchableOpacity>
                            {/* <Divider style={{height:2,width:"40%",backgroundColor:'#000',position:'absolute',bottom:0,zIndex:2,left:this.navActive, transform: [{translateX: this.navActiveHighlight}] }}/> */}
                        </View>
                        
                        <ScrollView>
                            <View style={styles.wrapper}>
                                {this.renderList()}
                            </View>
                        </ScrollView>
                    </View>
                    
                    <Modal
                        isVisible={this.state.open}
                        animationIn='fadeIn'
                        animationOut='fadeOut'
                        animationInTiming={500}
                        backdropTransitionInTiming={800}
                        onBackButtonPress={() => this._toggleModal()}
                        hideModalContentWhileAnimating={true}
                        onBackdropPress={() => this._toggleModal()}	
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.innerContainer}>

                                <View style={styles.modalCloseIconCont}>
                                    <Icon
                                        name='cross'
                                        type={'entypo'}
                                        size={32}
                                        onPress={this._toggleModal}
                                    />
                                </View>

                                <View style={{width:'100%',flexDirection:'row', justifyContent:'space-between', alignItems:'center',paddingRight:10}}>
                                    <Text style={{fontSize:10}}>Product</Text>
                                    <Text style={{fontSize:10}}>Quantity</Text>
                                </View>

                                <Divider style={{height:1,width:'100%',marginTop:5,marginBottom:10 }} />

                                <View style={{width:'100%',flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                                    <Text style={{fontSize:20,fontWeight:'bold',color:'#000'}}>{this.state.selectedData.name}</Text>
                                    <Counter updateCounter={this.updateCounter} />
                                </View>
                                <View style={styles.cartContainerStyle}>
                                    
                                    <Text style={styles.priceStyle}>Total : Rs  {this.state.selectedData.price*this.state.quantityCounter}</Text>
                                    <Text>( {this.state.selectedData.price} X {this.state.quantityCounter} )</Text>
                                    
                                </View>
                                <Button
                                    raised
                                    buttonStyle={{padding:20}}
                                    color='#000'
                                    backgroundColor='#EEFFB4'
                                    underlayColor='#C8FFFF'
                                    onPress={this.addToCart}
                                    icon={{name: 'add-shopping-cart', color: '#000', type: 'materialicons', size:15}}
                                    title='Add to cart' />
                            </View>
                        </View>
                    </Modal> 
                </Drawer>
                <SnackBar 
                    visible={this.state.isSnackOpen} 
                    textMessage = "Product added to your Cart."
                    messageColor="#FFF"
                    backgroundColor="#000" 
                />
            </View>
        );
    }
}

const styles ={
    container: {
        backgroundColor:'#E1FFFF',
        height:'100%',
        position:'relative'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    innerContainer: {
        height: SCREEN_HEIGHT/3,
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 20,
        padding:25,
        paddingTop:40,
        borderRadius: 8,
        position:'relative'
    },
    iconStyle: {
        height: 60,
        width: 60,
        marginRight: 20
    },
    arrowStyle:{
        height: 20,
        width: 20,
        marginLeft: 20
    },
    listItemStyle: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 20
    },
    nameStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        width: 80,
        color:'#000'
    },
    priceStyle:{
        color:'#000',
        fontSize: 15,
        fontWeight: 'bold',
        marginRight:10
    },
    drawerStyles:{
        drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
        main: {paddingLeft: 0},
    },
    modalCloseIconCont: {
        position:'absolute',
        top:5,
        right:5
    },
    cartContainerStyle: {
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        marginBottom:20
    },
    wrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 70
    },
    navBarStyle: {
        flexDirection:'row',
        padding: 20,
        backgroundColor:'#fff',
        width:'100%',
        borderBottomWidth:1,
        borderColor: '#ddd',
        zIndex: 2,
        position:'relative'
    },
    navBarElement:{
        width: '33%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    navBarElementActive:{
        color:'#000',
        fontSize: 15,
        fontWeight: 'bold',
    },
    navBarText:{
        color:'lightgrey'
    }
};

const mapStateToProps = state => {
    return{
        cart: state.cart
    };
}

export default connect(mapStateToProps, {addToCart,updateCart})(Dashboard);