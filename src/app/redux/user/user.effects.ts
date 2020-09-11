import {Injectable} from "@angular/core";
import { Actions, createEffect, ofType, act } from "@ngrx/effects";
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/services/http-communications.service';
import { switchMap, map, mergeMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { User } from 'src/app/core/models/user';
import { login, signup } from './user.actions';

@Injectable()
export class LoginEffects{
    constructor(private actions$:Actions, private httpCommunicationsService: HttpCommunicationsService){}

    login$: Observable<Action> = createEffect(()=>this.actions$.pipe(
        ofType(login),
        switchMap(action => this.httpCommunicationsService.retrieveGetCall<User[]>("products")
        .pipe(
            map(user => login({ user: user[0] }))
        ))
    ));

    signUp$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(signup),
        switchMap((action) => this.httpCommunicationsService.retrievePostCall("products",action.user)
        .pipe(
            map(() => signup({user:action.user}))
        ))
    ));
}