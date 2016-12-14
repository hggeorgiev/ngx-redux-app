
import {combineReducers, ActionReducer} from '@ngrx/store';
import * as fromOperations from '../reducers/operations';
import * as fromCurrencies from '../reducers/currencies';

import {Observable} from "rxjs";
import {compose} from "@ngrx/core";
import {combineLatest} from "rxjs/observable/combineLatest";
import {Operation} from "../models/operation.model";





/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  operations: fromOperations.State;
  currencies: fromCurrencies.State;
}


/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
const reducers = {
  operations: fromOperations.reducer,
  currencies: fromCurrencies.reducer

};

const combinedReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return combinedReducer(state, action);
}


export function getOperations(state$: Observable<State>) {
   return state$.select(state => state.operations);
}

export function getCurrencies(state$: Observable<State>) {
  return state$.select(state => state.currencies);
}
export const getEntities = compose(fromOperations.getEntities, getOperations);
export const getCurrencyEntities = compose(fromCurrencies.getCurrenciesEntities , getCurrencies);
export const getSelectedCurrency = compose(fromCurrencies.getSelectedCurrency , getCurrencies);
export const getCurrencyRates = compose(fromCurrencies.getRates , getCurrencies);


