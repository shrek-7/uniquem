import React, {Component} from 'react';
import { View, Text,Button, TouchableOpacity, Modal, Image } from 'react-native';
import Header from '../../components/header';
import Card from '../../components/card';
import ListItem from '../../components/list-item';
// import Modal from 'react-native-simple-modal';
const arowRight = require('../../assets/next.png');
const ListData=[
        {name:"Milk",image:require('../../assets/milk.png'), price:"50", unit:"lt"},
        {name:"Curd",image:require('../../assets/curd.png'), price:"120", unit:"kg"},
        {name:"Paneer",image:require('../../assets/paneer.png'), price:"90", unit:"200 gm"},
        {name:"Ghee",image:require('../../assets/ghee.png'), price:"200", unit:"500 ml"}
    ];

export default class LandingPage extends Component{
    constructor(){
        super()

        this.state={
            open:false,
            offset:100
        }

        this.renderList=this.renderList.bind(this);
    }

    renderList(){
       return ListData.map(item => {
            return (
                <TouchableOpacity  key={item.name}  onPress={this._toggleModal} >
                    <ListItem >
                        <View style={styles.listItemStyle}>
                            <Image
                                style={styles.iconStyle}
                                source={item.image}
                            />
                            <Text style={styles.nameStyle}>{item.name}</Text>
                            <Text style={styles.priceStyle}>
                                Rs {item.price} / {item.unit}
                            </Text>
                            <Image
                                style={styles.arrowStyle}
                                source={arowRight}
                            />
                        </View>
                        
                        
                    </ListItem>
                </TouchableOpacity>
            )
        })
    }

    _toggleModal = () =>
    this.setState({ open: !this.state.open});

    render(){
        return(
            <View >
                <View>
                    <Header title="Home"/>
                    {this.renderList()}
                </View>
                <Modal
                    visible={this.state.open}
                    transparent={true}
                    animationType={'slide'}
                    onRequestClose={() => this._toggleModal()}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.innerContainer}>
                            <Text>This is content inside of modal component</Text>
                            <TouchableOpacity>
                                <Button
                                    onPress={() => this._toggleModal()}
                                    title="Add to Cart"
                                >
                                </Button>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles ={
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'grey',
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
        marginRight: 30
    },
    arrowStyle:{
        height: 20,
        width: 20,
        marginLeft: 30
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
        textShadowOffset: {
            height: 1,
            width: 1
        },
        width: 100
    },
    priceStyle:{
        width: 100
    }
  };