import React,{Component} from 'react';
// import TimerMixin from 'react-timer-mixin';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
import {View, Text, ActivityIndicator, Image} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import Card from '../../components/card';
import CardSection from '../../components/card-section';
import Button from '../../components/button';
import Input from '../../components/input';

import {emailChanged, passwordChanged, loginUser} from '../../actions';

// const loader = require('../../assets/31.gif');

export class LoginPage extends Component{

    constructor(){
        super()

        this.state = {
            showLoader:true
        };

        this.onEmailChange=this.onEmailChange.bind(this);
        this.onPasswordChange=this.onPasswordChange.bind(this);
        this.renderError = this.renderError.bind(this);
        this.renderButton = this.renderButton.bind(this);
    }

    componentDidMount(){
        setTimeout(()=>this.setState({showLoader:false}), 2000);

    }
    

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onLoginPress(){
        this.props.loginUser(this.props.email,this.props.password);
    }

    renderButton(){
        if(this.props.loading){
            return(
                <View style={styles.loaderStyle}>
                    <ActivityIndicator size={'large'}/>
                </View>
            );
        }else{
            return(
                <Button onPress={()=>Actions.dashboard()}>
                    Log In
                </Button>
            );   
        }
    }

    renderError(){
        if(this.props.error){
            return(
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    render(){
        return(
            <View style={styles.containerStyle}>
                {this.state.showLoader?
                <View style={styles.firstLoaderStyle}>
                    <Bubbles size={20} color="#FFF" />
                </View>
                :
                <Card>
                    <CardSection>
                        <Input
                            placeholder="user@gmail.com"
                            label="Email"
                            value={this.props.email}
                            onChangeText={email => this.onEmailChange(email)}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            secureTextEntry
                            placeholder="password"
                            label="Password"
                            value={this.props.password}
                            onChangeText={password => this.onPasswordChange(password)}
                        />
                    </CardSection>
                    {this.renderError()}
                    <CardSection>
                        {this.renderButton()}
                    </CardSection>                
                </Card>}
            </View>
        );
    }
}

const styles ={
    containerStyle: {
        justifyContent: 'center',
        flexDirection: 'column',
        height:'100%',
        backgroundColor: '#C3ECFA'
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    loaderStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    firstLoaderStyle:{
        height: '100%', 
        justifyContent:'center', 
        alignItems:'center'
    }
}

const mapStateToProps = state => {
    return{
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
}

export default connect(mapStateToProps, {emailChanged,passwordChanged,loginUser})(LoginPage);