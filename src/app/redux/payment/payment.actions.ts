import {createAction, props} from '@ngrx/store';
import { Shipping } from 'src/app/core/models/shipping';
export const initShipping = createAction('[Shipping] init', props<{shipping:Shipping}>());
export const saveShipping = createAction('[Shipping] save', props<{shipping:Shipping}>());

