import { Action, createReducer, on } from '@ngrx/store';
import {addToCart} from './cart.actions'

export interface CartState{
    products: string[];
}

export const initialState: CartState = {
    products:[]
};

const cartReducerFun = createReducer(
    initialState,
    on(addToCart, (state, {product}) => ({...state, products:[...state.products, product]})),
);

export function cartReducer(state: CartState | undefined, action: Action) {
    return cartReducerFun(state, action);
}  