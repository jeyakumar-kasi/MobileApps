import productReducer from './productReducer';
import cartReducer from './cartReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer
});

export default rootReducer;