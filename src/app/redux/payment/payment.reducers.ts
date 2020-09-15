import { Action, createReducer, on } from '@ngrx/store';
import { Payment } from 'src/app/core/models/payment';
import { initPayment } from './payment.actions';

export interface PaymentState{
    payment: Payment;
}

export const initialState: PaymentState = {
    payment:null
};

const paymentReducerFun = createReducer(
    initialState,
    on(initPayment, (state, {payment}) => ({ ...state.payment, payment: payment})),
);

export function paymentReducer(state: PaymentState | undefined, action: Action) {
    return paymentReducerFun(state, action);
}  