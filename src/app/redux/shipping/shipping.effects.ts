import {Injectable} from "@angular/core";
import { Actions, createEffect, ofType, act } from "@ngrx/effects";
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/services/http-communications.service';
import { switchMap, map, mergeMap, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';

@Injectable()
export class ShippingEffects{
    constructor(private actions$:Actions, private http: HttpCommunicationsService){}
}