import {ActionReducer, Action, State} from '@ngrx/store';
import * as operations from '../actions/operations';
import {Operation} from "../models/operation.model";




const initialState:State = [];


export const operationsReducer: ActionReducer = (state = initialState, action: operations.Actions) => {
  switch (action.type) {
    case operations.ActionTypes.ADD_OPERATION:
      const operation:Operation = action.payload;
      return [ ...state, operation ];

    case operations.ActionTypes.INCREMENT_OPERATION:
      const operation = ++action.payload.amount;
      return state.map(item => {
        return item.id === action.payload.id ? Object.assign({}, item, operation) : item;
      });

    case operations.ActionTypes.DECREMENT_OPERATION:
      const operation = --action.payload.amount;
      return state.map(item => {
        return item.id === action.payload.id ? Object.assign({}, item, operation) : item;
      });

    case operations.ActionTypes.REMOVE_OPERATION:
      return state.filter(operation => {
        return operation.id !== action.payload.id;
      });


    default:
      return state;
  }

};
