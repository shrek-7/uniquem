import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Keyboard} from 'react-native'
import { View, Text,Button, TouchableOpacity, Image, ScrollView } from 'react-native';

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
const dairyData=[
        {name:"Milk",image:require('../../assets/milk.png'), price:50, unit:"lt"},
        {name:"Curd",image:require('../../assets/curd.png'), price:120, unit:"kg"},
        {name:"Paneer",image:require('../../assets/paneer.png'), price:90, unit:"200 gm"},
        {name:"Ghee",image:require('../../assets/ghee.png'), price:200, unit:"500 ml"}
    ];
const groceryData=[
    {name:"tomato",image:require('../../assets/milk.png'), price:50, unit:"lt"},
    {name:"potato",image:require('../../assets/curd.png'), price:120, unit:"kg"},
    {name:"onions",image:require('../../assets/paneer.png'), price:90, unit:"200 gm"},
    {name:"brinjal",image:require('../../assets/ghee.png'), price:200, unit:"500 ml"}
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
            isSnackOpen: false
        }

        this.renderList=this.renderList.bind(this);
        this.openDrawer = this.openDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
        this.onItemClick = this.onItemClick.bind(this);
        this.updateCounter = this.updateCounter.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount(){
        if(this.props.category==='grocery') {
            this.setState({data:groceryData})
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
                        <ScrollView>
                            <View style={styles.wrapper}>
                                {this.renderList()}
                            </View>
                        </ScrollView>
                    </View>
                    
                    <Modal
                        isVisible={this.state.open}
                        animationIn='slideInDown'
                        animationOut='slideOutUp'
                        animationInTiming={300}
                        backdropTransitionInTiming={800}
                        onBackButtonPress={() => this._toggleModal()}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.innerContainer}>
                                <Text>{this.state.selectedData.name}</Text>
                                <Counter updateCounter={this.updateCounter} />
                                <View style={styles.cartContainerStyle}>
                                    
                                    <Text style={styles.priceStyle}>Rs : {this.state.selectedData.price*this.state.quantityCounter}</Text>
                                    
                                    <TouchableOpacity>
                                        <Button
                                            onPress={this.addToCart}
                                            title="Add to Cart"
                                        >
                                        </Button>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.modalCloseIconCont}>
                                <TouchableOpacity onPress={() => this._toggleModal()}>
                                    <Image
                                        source={cross}
                                        style={styles.modalCloseIcon}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal> 
                </Drawer>
                <SnackBar 
                    visible={this.state.isSnackOpen} 
                    textMessage = "Item added to Cart."
                    messageColor="#FFD54F"
                    backgroundColor="#424242" 
                />
            </View>
        );
    }
}

const styles ={
    container: {
        backgroundColor:'#FFFDE7',
        height:'100%'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    innerContainer: {
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 20,
        borderRadius: 8
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
        fontWeight: 'bold'
    },
    drawerStyles:{
        drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
        main: {paddingLeft: 0},
    },
    modalCloseIcon: {
        width: 40,
        height: 40
    },
    modalCloseIconCont: {
        justifyContent:'center',
        marginTop: 50,
        alignItems:'center',
    },
    cartContainerStyle: {
        flexDirection:'row',
        justifyContent: 'space-between',
        borderTopWidth: 0.5,
        borderColor:'#000',
        alignItems: 'center',
        width: '100%',
        padding: 10
    },
    wrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
};

const mapStateToProps = state => {
    return{
        cart: state.cart
    };
}

export default connect(mapStateToProps, {addToCart,updateCart})(Dashboard);