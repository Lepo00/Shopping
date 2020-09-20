import {AppState} from '..';
import {createSelector } from '@ngrx/store';
import {CartState} from './cart.reducers'

export const selectCartState = (state: AppState)=>state.cartState;

export const selectProducts = createSelector(
    selectCartState,
    (cartState: CartState) => cartState.products
)

export const selectTeams = createSelector(
    selectCartState,
    (cartState: CartState) => cartState.teams
)
