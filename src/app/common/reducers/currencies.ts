import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import * as currencies from '../actions/currencies';



export interface State {
  entities:Array<string>
  selectedCurrency: string | null;
  rates: string
  loadingRates:boolean
};

const initialState: State = {
    entities: ['GBP', 'EUR'],
    selectedCurrency: null,
    rates: '',
    loadingRates: false
};


export function reducer(state = initialState, action: currencies.Actions): State {
  switch (action.type) {

    case currencies.ActionTypes.LOAD_CURRENCY_RATES: {
      return {
        entities: state.entities,
        selectedCurrency: state.selectedCurrency,
        rates: state.rates,
        loadingRates: true
      };
    }
    case currencies.ActionTypes.CHANGE_CURRENCY: {
        return {
          entities: state.entities,
          selectedCurrency: action.payload,
          rates: state.rates,
          loadingRates: false
        };
    }
    case currencies.ActionTypes.LOAD_RATES_COMPLETE: {
      return {
        entities: state.entities,
        selectedCurrency: state.selectedCurrency,
        rates: action.payload,
        loadingRates: false
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

export function getRates(state$: Observable<State>) {
  return state$.select(s => s.rates);
}
