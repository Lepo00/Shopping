import {Injectable} from "@angular/core";
import { Actions, createEffect, ofType, act } from "@ngrx/effects";
import { Observable, of } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/services/http-communications.service';
import { switchMap, map, mergeMap, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { User } from 'src/app/core/models/user';
import { initUser, login, loginUserFailure, loginUserSuccess, signup } from './user.actions';

@Injectable()
export class UserEffects{
    constructor(private actions$:Actions, private http: HttpCommunicationsService){}

    registerUser(username:string,password:string,email: string):Observable<User>{
        return this.http.retrievePostCall<User>("users",{username,password,email})
    }

    retreiveAllUsers():Observable<User[]>{
        return this.http.retrieveGetCall<User[]>("user")
    }

    checkUserAccount(mail:string,password:string,users){
        return users.find(actualUser=>actualUser.email === mail && actualUser.password === password);
    }

    login$: Observable<Action> = createEffect(()=>this.actions$.pipe(
        ofType(login),
        switchMap((action)=>this.retreiveAllUsers().pipe(
        switchMap(users=> of(this.checkUserAccount(action.user.email,action.user.password,users)).pipe(
            map(user=>{if(typeof user === 'undefined'){
                    return loginUserFailure({error:"Mail o password errate"});
                }else{
                    return loginUserSuccess({user});
                }
            } 
            )
        )
       )
       )
    )));

    loginUserSuccess$ : Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(loginUserSuccess),
        tap( action => {
            sessionStorage.setItem("utente", JSON.stringify({username: action.user.username, email: action.user.email }))
        }),
        map(action=> initUser({user: action.user}))
    ))


    signUp$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(signup),
        switchMap((action) => this.http.retrievePostCall("products",action.user)
        .pipe(
            map(() => signup({user:action.user}))
        ))
    ));
}