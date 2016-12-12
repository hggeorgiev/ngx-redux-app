import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import * as operations from '../actions/operations';
import {Operation} from "../models/operation.model";


/*
  From a simple array ( [] ),
  the state becomes a object where the array is contained
  withing the entities property
 */
export interface State {
  entities:Array<Operation>
};

const initialState: State = {  entities: []};
const fx = require('money');
fx.base = "USD";

export function reducer(state = initialState, action: operations.Actions): State {

  switch (action.type) {
    case operations.ActionTypes.ADD_OPERATION: {
      const operation: Operation = action.payload;
      return {
        entities: [...state.entities, operation]
      };

    }

    case operations.ActionTypes.INCREMENT_OPERATION: {
      const operation = ++action.payload.amount;
      return Object.assign({}, state, {
        entities: state.entities.map(item => item.id === action.payload.id ? Object.assign({}, item, operation) : item)
      });
    }

    case operations.ActionTypes.DECREMENT_OPERATION: {
      const operation = --action.payload.amount;
      return Object.assign({}, state, {
         entities: state.entities.map(item => item.id === action.payload.id ? Object.assign({}, item, operation) : item)
      });
    }

    case operations.ActionTypes.REMOVE_OPERATION: {

      return Object.assign({}, state, {
        entities: state.entities.filter(operation => operation.id !== action.payload.id)
      })

    }

    default:
      return state;
  }

};

export function getEntities(state$: Observable<State>) {
  return state$.select(s => s.entities);
}
