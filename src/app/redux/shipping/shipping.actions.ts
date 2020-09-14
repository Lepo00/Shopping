import {createAction, props} from '@ngrx/store';
import { Shipping } from 'src/app/core/models/shipping';
export const initShipping = createAction('[Cart] init', props<{shipping:Shipping}>());
export const saveShipping = createAction('[Cart] save', props<{shipping:Shipping}>());

