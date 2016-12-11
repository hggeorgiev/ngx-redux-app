import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import * as currencies from '../actions/currencies';



export interface State {
  entities:Array<string>
  selectedCurrency: string | null;
};

const initialState: State = {
    entities: ['GBP', 'EUR'],
    selectedCurrency: null
};


export function reducer(state = initialState, action: currencies.Actions): State {
  switch (action.type) {
    case currencies.ActionTypes.CHANGE_CURRENCY: {
        return {
          entities: state.entities,
          selectedCurrency: action.payload
        };
    }
    default:
      return state;
  }

}


export function getCurrenciesEntities(state$: Observable<State>) {
  return state$.select(s => s.entities);
}


export function getSelectedCurrency(state$: Observable<State>) {
  return state$.select(s => s.selectedCurrency);
}

