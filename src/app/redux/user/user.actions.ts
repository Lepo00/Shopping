import {createAction, props} from '@ngrx/store';
import { User } from 'src/app/core/models/user';
export const login = createAction('[User] signin', props<{user:User}>());
export const signUpUser = createAction('[Auth] signUp', props<{user:User}>());
export const signUpUserSuccess = createAction('[Auth] signUp Success', props<{user: User}>());
export const loginUserSuccess = createAction('[Auth] Login Success', props<{user: User}>());
export const loginUserFailure = createAction('[Auth] Login Failure', props<{error: string}>());
export const initUser = createAction('[User] init', props<{user: User}>());
