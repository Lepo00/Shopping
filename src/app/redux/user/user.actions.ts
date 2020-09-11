import {createAction, props} from '@ngrx/store';
import { User } from 'src/app/core/models/user';
export const login = createAction('[User] signin', props<{user:User}>());
export const signup = createAction('[User] signup', props<{user:User}>());
