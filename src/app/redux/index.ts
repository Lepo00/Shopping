import { CartState, cartReducer } from './cart/cart.reducers';
import { ActionReducerMap, createReducerFactory } from '@ngrx/store';
import { UserState, userReducer } from './user/user.reducers';
import { shippingReducer, ShippingState } from './shipping/shipping.reducers';

export interface AppState{
    cartState: CartState;
    userState: UserState;
    shippingState: ShippingState;
}

export const reducers: ActionReducerMap<AppState> ={
    cartState: cartReducer,
    userState: userReducer,
    shippingState: shippingReducer,
};