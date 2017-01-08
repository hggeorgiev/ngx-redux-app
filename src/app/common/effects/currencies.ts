import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import * as currencyActions from '../actions/currencies';

import {CurrencyService} from "../services/currency.service";
import {LoadRatesCompleteAction} from "../actions/currencies";



@Injectable()
export class CurrencyEffects {
  constructor(
    private _actions: Actions,
    private _currencyService:CurrencyService
  ) { }



  @Effect() loadCategories$ = this._actions.ofType(currencyActions.ActionTypes.LOAD_CURRENCY_RATES)
    .switchMap(() => this._currencyService.loadCurrencies()
      .map((rates) => new LoadRatesCompleteAction(rates) )
      .catch(() => Observable.of( new LoadRatesCompleteAction('')))
    );



}
