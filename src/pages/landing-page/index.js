import React, {Component} from 'react';
import { View, Text,Button, TouchableOpacity, Modal } from 'react-native';
import Header from '../../components/header';
import Card from '../../components/card';
import ListItem from '../../components/list-item';
// import Modal from 'react-native-simple-modal';

const ListData=[{name:"Milk"},{name:"Paneer"},{name:"Ghee"},{name:"Curd"}];

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
                        <Text>{item.name}</Text>
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
                    <Header title="Welcome"/>
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
  };