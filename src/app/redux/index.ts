import { CartState, cartReducer } from './cart/cart.reducers';
import { ActionReducerMap, createReducerFactory } from '@ngrx/store';
import { UserState, userReducer } from './user/user.reducers';

export interface AppState{
    cartState: CartState;
    userState: UserState;
}

export const reducers: ActionReducerMap<AppState> ={
    cartState: cartReducer,
    userState: userReducer,
};