import {AppState} from '..';
import {createSelector } from '@ngrx/store';
import {UserState} from '../user/user.reducers'

export const selectUserState = (state: AppState)=>state.userState;

export const selectUsers = createSelector(
    selectUserState,
    (userState: UserState) => userState.user
)

export const selectErrorMessage = createSelector(
    selectUserState,
    (userState: UserState) => userState.errorMessage
)
