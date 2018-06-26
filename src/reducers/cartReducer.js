import {ADD_TO_CART, UPDATE_CART, REMOVE_FROM_CART} from '../actions';

const INITIAL_STATE = {
    data:{}
};

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case ADD_TO_CART:
            let obj ={};
            obj[action.payload.product.name] = {price:action.payload.product.price,unit:action.payload.product.unit,quantity:action.payload.quantity}
            let data={...state.data,...obj};
            // console.log(data);
            return Object.assign({}, state, {
                data: data
            });
        
        case UPDATE_CART:
            obj=state.data[action.payload.product.name]
            obj.quantity= obj.quantity+action.payload.quantity;
            data=state.data;
            data[action.payload.product.name] = obj;
            return Object.assign({}, state, {
                data: data
            });
        
        case REMOVE_FROM_CART:
            obj = state.data
            delete obj[action.payload]
            return Object.assign({}, state, {
                data: obj
            });

            default: 
                return state;
    }
}
