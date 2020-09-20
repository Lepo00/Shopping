import { CartState, cartReducer } from './cart/cart.reducers';
import { ActionReducerMap, createFeatureSelector, createReducerFactory } from '@ngrx/store';
import { UserState, userReducer } from './user/user.reducers';
import { shippingReducer, ShippingState } from './shipping/shipping.reducers';
import { paymentReducer, PaymentState } from './payment/payment.reducers';
import { getSelectors, routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface AppState{
    cartState: CartState;
    userState: UserState;
    shippingState: ShippingState;
    paymentState: PaymentState;
    router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<AppState> ={
    cartState: cartReducer,
    userState: userReducer,
    shippingState: shippingReducer,
    paymentState: paymentReducer,
    router: routerReducer,
};

export const selectRouter = createFeatureSelector<
  AppState,
  RouterReducerState<any>
>('router');
 
export const {
  selectCurrentRoute,   // select the current route
  selectFragment,       // select the current route fragment
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = getSelectors(selectRouter);