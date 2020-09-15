import {Injectable} from "@angular/core";
import { Actions, createEffect, ofType, act } from "@ngrx/effects";
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/services/http-communications.service';
import { switchMap, map, mergeMap, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import {initPayment, savePayment } from './payment.actions';

@Injectable()
export class PaymentEffects{
    constructor(private actions$:Actions, private http: HttpCommunicationsService){}

    savePayment$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(savePayment),
        map((action)=>initPayment({payment:action.payment})
        )
    ))

    
}