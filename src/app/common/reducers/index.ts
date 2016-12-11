
import {combineReducers, ActionReducer} from '@ngrx/store';


import * as fromLayout from '../reducers/layout';
import * as fromOperations from '../reducers/operations';
import {Observable} from "rxjs";
import {compose} from "@ngrx/core";



/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  operations: fromOperations.State;
  layout: fromLayout.State;

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
  layout: fromLayout.reducer,

};

const combinedReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return combinedReducer(state, action);
}


export function getOperations(state$: Observable<State>) {
   return state$.select(state => state.operations);
}

export const getEntities = compose(fromOperations.getEntities, getOperations);

