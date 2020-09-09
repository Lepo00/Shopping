import {Injectable} from "@angular/core";
import { addToCart, saveToCart, initCart, retrieveAllProducts } from './cart.actions';
import { Actions, createEffect, ofType, act } from "@ngrx/effects";
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/services/http-communications.service';
import { switchMap, map, mergeMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Product } from 'src/app/core/models/product';

@Injectable()
export class CartEffects{
    addToCart$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(addToCart),
        switchMap((action) => this.httpCommunicationsService.retrievePostCall("products",action.product)
        .pipe(
            map(() => saveToCart({product: action.product}))
        ))
    ));

    retrieveAllProducts$: Observable<Action> = createEffect(()=>this.actions$.pipe(
        ofType(retrieveAllProducts),
        switchMap(action => this.httpCommunicationsService.retrieveGetCall<Product[]>("products")
        .pipe(
            map(products => initCart({ products: products }))
        ))
    ))

    constructor(private actions$:Actions, private httpCommunicationsService: HttpCommunicationsService){}
}