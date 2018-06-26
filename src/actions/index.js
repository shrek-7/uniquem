import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
export const EMAIL_CHANGED = 'EMAIL_CHANGED';
export const PASSWORD_CHANGED = 'PASSWORD_CHANGED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_USER = 'LOGIN_USER';
export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export function emailChanged(text) {
    return{
        type: EMAIL_CHANGED,
        payload: text
    };
};

export function passwordChanged(text) {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export function loginUser(email, password) {
    return(dispatch) => {
        //to trigger loader
        dispatch({type: LOGIN_USER});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
            //user received
                dispatch({ type: LOGIN_SUCCESS, payload: user});
                Actions.dashboard();
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => {
                        dispatch({type: LOGIN_SUCCESS, payload: user});
                        Actions.dashboard();
                    })
                    .catch(e => {
                        loginFailed(dispatch)
                    })
            }) 
        }   
}

export function loginFailed(dispatch) {
    dispatch({type: LOGIN_FAILED});
}

export function addToCart(data){
    return{
        type: ADD_TO_CART,
        payload: data
    };
};

export function updateCart(data){
    return {
        type: UPDATE_CART,
        payload: data
    }
}

export function removeFromCart(data) {
        return {
            type: REMOVE_FROM_CART,
            payload: data
        }
}