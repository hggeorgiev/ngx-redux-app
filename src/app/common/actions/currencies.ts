import { Action } from '@ngrx/store';


export const ActionTypes = {
  CHANGE_CURRENCY: 'Change currency',
  LOAD_CURRENCY_RATES: 'Loading currency rates',
  LOAD_RATES_COMPLETE: 'Load rates complete'

};




export class ChangeCurrencyAction implements Action {
  type = ActionTypes.CHANGE_CURRENCY;
  constructor(public payload:string) { }
}

export class LoadCurrencyRatesAction implements Action {
  type = ActionTypes.LOAD_CURRENCY_RATES;
  constructor(public payload:string) { }

}

export class LoadRatesCompleteAction implements Action {
  type = ActionTypes.LOAD_RATES_COMPLETE;
  constructor(public payload:string) { }
}



export type Actions =
  ChangeCurrencyAction |
  LoadCurrencyRatesAction |
  LoadRatesCompleteAction
