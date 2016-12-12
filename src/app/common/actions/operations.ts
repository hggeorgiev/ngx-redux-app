import { Action } from '@ngrx/store';
import {Operation} from "../models/operation.model";


export const ActionTypes = {
  ADD_OPERATION: 'Add an operation',
  REMOVE_OPERATION:'Remove an operation',
  INCREMENT_OPERATION:'Increment an operation',
  DECREMENT_OPERATION: 'Decrement an operation',
};




export class AddOperationAction implements Action {
  type = ActionTypes.ADD_OPERATION;

  constructor(public payload:Operation) { }
}

export class RemoveOperationAction implements Action {
  type = ActionTypes.REMOVE_OPERATION;

  constructor(public payload:Operation) { }
}

export class IncrementOperationAction implements Action {
  type = ActionTypes.INCREMENT_OPERATION;

  constructor(public payload:Operation) { }
}

export class DecrementOperationAction implements Action {
  type = ActionTypes.DECREMENT_OPERATION;

  constructor(public payload:Operation) { }
}


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = AddOperationAction |
  RemoveOperationAction |
  IncrementOperationAction |
  DecrementOperationAction
