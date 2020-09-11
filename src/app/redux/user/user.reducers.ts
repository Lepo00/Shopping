import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/core/models/user';
import { login, signup } from './user.actions';

export interface UserState{
    user: User;
}

export const initialState: UserState = {
    user:null
};

const userReducerFun = createReducer(
    initialState,
    on(login, (state, { user }) => ({ ...state, user: user })),
    on(signup),
);

export function userReducer(state: UserState | undefined, action: Action) {
    return userReducerFun(state, action);
}  