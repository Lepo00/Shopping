import {createAction, props} from '@ngrx/store';
import { Payment } from 'src/app/core/models/payment';
export const initPayment = createAction('[Payment] init', props<{payment:Payment}>());
export const savePayment = createAction('[Payment] save', props<{payment:Payment}>());

