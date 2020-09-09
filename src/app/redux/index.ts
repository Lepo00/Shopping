import { CartState, cartReducer } from './cart/cart.reducers';
import { ActionReducerMap, createReducerFactory } from '@ngrx/store';

export interface AppState{
    cartState: CartState;
}

export const reducers: ActionReducerMap<AppState> ={
    cartState: cartReducer
};