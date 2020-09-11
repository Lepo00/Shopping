import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/core/models/user';
import { initUser, login, loginUserFailure, signUpUser } from './user.actions';

export interface UserState{
    user: User;
    errorMessage: string | null;
}

export const initialState: UserState = {
    user:null,
    errorMessage: null
};

const userReducerFun = createReducer(
    initialState,
    on(initUser, (state, {user}) => ({ ...state, user, errorMessage: null })),
    on(loginUserFailure, (state, {error}) => ({...state, user: null, errorMessage: error}))
);

export function userReducer(state: UserState | undefined, action: Action) {
    return userReducerFun(state, action);
}  