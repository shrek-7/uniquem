import React,{Component} from 'react';
import {Text, View, TouchableOpacity,Image} from 'react-native';
import { Icon } from 'react-native-elements';
import add from '../../assets/add.png';
import minus from '../../assets/minus.png';

export default class Counter extends Component{
    constructor(){
        super()

        this.state={
            value: 1
        }
        this.value=1;
        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.props=nextProps;
        if(this.props.value){
            this.setState({value: this.props.value})
        }
    }
    componentDidMount() {
        if(this.props.value){
            this.setState({value: this.props.value})
        }
    }

    incrementCounter(){
            this.setState({value:this.state.value+1});
            if(this.props.data){
                this.props.updateCounter(1,this.props.data);    
            }else{
                this.props.updateCounter(1);
            }   
    }

    decrementCounter(){
        if(this.state.value!==1){
            this.setState({value:this.state.value-1});
            if(this.props.data){
                this.props.updateCounter(-1,this.props.data);    
            }else{
                this.props.updateCounter(-1);
            }
        }  
    }

    render(){
        return(
            <View style={styles.containerStyle}>
                <TouchableOpacity onPress={this.decrementCounter}>
                    <Icon
                        name='minus-square-o'
                        type={'font-awesome'}
                        size={28}
                    />
                </TouchableOpacity>
                
                <Text>{this.state.value}</Text>

                <TouchableOpacity onPress={this.incrementCounter}>
                    <Icon
                        name='plus-square-o'
                        type={'font-awesome'}
                        size={28}
                    />
                </TouchableOpacity>    
            </View>
        )
    }
}

const styles={
    containerStyle: {
        width:100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 5
    },
    iconStyle: {
        height: 30,
        width: 30
    },
    iconAddWrapperStyle:{
        width: 20,
        height: 20,
        borderWidth: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
    iconSubWrapperStyle:{
        width: 20,
        height: 20,
        borderWidth: 1,
        alignItems:'center',
        justifyContent: 'center',
        padding:5
    }
}