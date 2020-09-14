import {AppState} from '..';
import {createSelector } from '@ngrx/store';
import {ShippingState} from './shipping.reducers'

export const selectShippingState = (state)=>state.shippingState;

export const selectShipping = createSelector(
    selectShippingState,
    (shippingState: ShippingState) => shippingState.shipping
)