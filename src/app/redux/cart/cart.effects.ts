import {Injectable} from "@angular/core";
import { addToCart, saveToCart, initCart, retrieveAllProducts, removeToCart, removeItem, retrieveAllTeams, initTeams } from './cart.actions';
import { Actions, createEffect, ofType, act } from "@ngrx/effects";
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/services/http-communications.service';
import { switchMap, map, mergeMap, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Product } from 'src/app/core/models/product';

@Injectable()
export class CartEffects{
    constructor(private actions$:Actions, private http: HttpCommunicationsService){}

    addToCart$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(addToCart),
        switchMap((action) => this.http.retrievePostCall("products",action.product)
        .pipe(
            map((product:Product) => saveToCart({product: product}))
        ))
    ));

    retrieveAllProducts$: Observable<Action> = createEffect(()=>this.actions$.pipe(
        ofType(retrieveAllProducts),
        switchMap(action => this.http.retrieveGetCall<Product[]>("products")
        .pipe(
            map(products => initCart({ products: products }))
        ))
    ))

    retrieveAllTeams$:Observable<Action> = createEffect(()=>this.actions$.pipe(
        ofType(retrieveAllTeams),
        switchMap(action => this.http.retrieveGetCall<string[][]>("team").pipe(
            map(teams => initTeams({teams})),
        ))
    ))

    removeProducts$: Observable<Action> = createEffect(()=>this.actions$.pipe(
         ofType(removeToCart),
         switchMap(action=> this.http.retrieveDeleteCall<Product[]>("products/"+action.id).pipe(
             map(products => removeItem({ id: action.id }))
         ))
     ))
}