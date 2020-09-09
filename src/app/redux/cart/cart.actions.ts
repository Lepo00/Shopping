import {createAction, props} from '@ngrx/store';
import { Product } from 'src/app/core/models/product';
export const retrieveAllProducts = createAction('[Cart] retrieve all products');
export const initCart = createAction('[Cart] init', props<{products:Product[]}>());
export const addToCart = createAction('[Cart] add', props<{product:Product}>());
export const saveToCart = createAction('[Cart] save', props<{product:Product}>());
