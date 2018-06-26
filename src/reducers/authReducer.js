import {
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_SUCCESS, 
    LOGIN_FAILED,
    LOGIN_USER
} from '../actions';

const INITIAL_STATE = {
    email: '',
    password:'', 
    user:null, 
    error: '',
    loading: false
};

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case EMAIL_CHANGED:
            return {...state, email: action.payload};

        case PASSWORD_CHANGED:
            return {...state, password: action.payload};

        case LOGIN_SUCCESS: 
            return {...state, user: action.payload, error: '', loading: false};

        case LOGIN_FAILED:
            return {...state, error: 'Authentication Falied', loading: false};

        case LOGIN_USER:
            return {...state, error:'', loading: true};

        default: 
            return state;
    }
}