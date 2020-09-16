import { Action, createReducer, on } from '@ngrx/store';
import {saveToCart, initCart, removeToCart, removeItem, initTeams} from './cart.actions'
import { Product } from 'src/app/core/models/product';

export interface CartState{
    products: Product[];
    teams: string[][];
}

export const initialState: CartState = {
    products:[],
    teams: [],
};

const cartReducerFun = createReducer(
    initialState,
    on(saveToCart, (state, {product}) => ({...state, products:[...state.products, product]})),
    on(initCart, (state, {products}) => ({ ...state, products: products })),
    on(initTeams, (state, {teams}) => ({ ...state, teams: teams })),
    on(removeItem,(state, {id}) => ({ ...state, products:state.products.filter(item=>item.id !==id) })),
);

export function cartReducer(state: CartState | undefined, action: Action) {
    return cartReducerFun(state, action);
}  