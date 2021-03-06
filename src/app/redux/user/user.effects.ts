import {Injectable} from "@angular/core";
import { Actions, createEffect, ofType, act } from "@ngrx/effects";
import { Observable, of } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/services/http-communications.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { switchMap, map, mergeMap, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { User } from 'src/app/core/models/user';
import { initUser, login, loginUserFailure, loginUserSuccess, signUpUser, signUpUserSuccess, updateUser } from './user.actions';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects{
    constructor(private actions$:Actions, private http: HttpCommunicationsService, private router:Router, private auth:AuthService){}

    registerUser(user:User):Observable<User>{
        return this.http.retrievePostCall<User>("user",user)
    }
      
    retreiveAllUsers():Observable<User[]>{
        return this.http.retrieveGetCall<User[]>("user")
    }

    login$: Observable<Action> = createEffect(()=>this.actions$.pipe(
        ofType(login),
        switchMap((action)=>this.retreiveAllUsers().pipe(
        switchMap(users=> of(this.auth.checkUserAccount(action.user.email,action.user.password,users)).pipe(
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
        tap((action)=>{
            sessionStorage.setItem("user", JSON.stringify(action.user))
            sessionStorage.setItem("id", JSON.stringify(action.user.id)),
            this.router.navigateByUrl('/home');
        }),
        map(action=> initUser({user: action.user})),
    ))


    signUpUser$=createEffect(()=>this.actions$.pipe(
        ofType(signUpUser),
        switchMap(action=>this.registerUser(action.user).pipe(
        tap(user=> console.log(user)),
        map( (formattedUser) => signUpUserSuccess({ user: formattedUser }))
        ))
    ));
        
    signUpUserSuccess$=createEffect(()=>this.actions$.pipe(
        ofType(signUpUserSuccess),
        //tap((action)=>console.log('utente,registrato adesso devo registrarlo nella sessione e reindirizzarlo',action)),
        map( (action) => initUser({ user:action.user })),
        tap((action)=>{
            sessionStorage.setItem("user", JSON.stringify(action.user))
            sessionStorage.setItem("id", JSON.stringify(action.user.id)),
            this.router.navigateByUrl('/home');
        })
    ))

    updateUser$=createEffect(()=>this.actions$.pipe(
        ofType(updateUser),
        switchMap((action)=>this.http.retrievePutCall("user/"+action.user.id,action.user).pipe(
            map((user:User)=>initUser({user: user}))
        )),
        tap((action)=>{
            sessionStorage.setItem("user", JSON.stringify(action.user)),
            sessionStorage.setItem("id", JSON.stringify(action.user.id))
        })
    ))

}