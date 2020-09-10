import {Injectable} from "@angular/core";
import { addToCart, saveToCart, initCart, retrieveAllProducts } from './login.actions';
import { Actions, createEffect, ofType, act } from "@ngrx/effects";
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/services/http-communications.service';
import { switchMap, map, mergeMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Product } from 'src/app/core/models/product';

@Injectable()
export class LoginEffects{
    constructor(private actions$:Actions, private httpCommunicationsService: HttpCommunicationsService){}
}