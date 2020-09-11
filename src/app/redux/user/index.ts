import {AppState} from '..';
import {createSelector } from '@ngrx/store';
import {UserState} from '../user/user.reducers'

export const selectUserState = (state)=>state.userState;

export const selectProducts = createSelector(
    selectUserState,
    (userState: UserState) => userState.user
)

export const selectErrorMessage = createSelector(
    selectUserState,
    (userState: UserState) => userState.errorMessage
)
