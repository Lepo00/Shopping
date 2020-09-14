import {AppState} from '..';
import {createSelector } from '@ngrx/store';
import {ShippingState} from './shipping.reducers'

export const selectShippingState = (state)=>state.cartState;

export const selectShipping = createSelector(
    selectShippingState,
    (ShippingState: ShippingState) => ShippingState.shipping
)
