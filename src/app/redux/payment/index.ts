import {AppState} from '..';
import {createSelector } from '@ngrx/store';
import {PaymentState} from './payment.reducers'

export const selectPaymentState = (state)=>state.paymentState;

export const selectPayment = createSelector(
    selectPaymentState,
    (paymentState: PaymentState) => paymentState.payment
)
