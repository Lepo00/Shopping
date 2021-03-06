import { Action, createReducer, on } from '@ngrx/store';
import { Shipping } from 'src/app/core/models/shipping';
import { initShipping, saveShipping } from './shipping.actions';

export interface ShippingState{
    shipping: Shipping;
}

export const initialState: ShippingState = {
    shipping:null
};

const shippingReducerFun = createReducer(
    initialState,
    on(initShipping, (state, {shipping}) => ({ ...state.shipping, shipping: shipping})),
);

export function shippingReducer(state: ShippingState | undefined, action: Action) {
    return shippingReducerFun(state, action);
}  