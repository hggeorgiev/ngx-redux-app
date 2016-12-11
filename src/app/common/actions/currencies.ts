import { Action } from '@ngrx/store';


export const ActionTypes = {
  CHANGE_CURRENCY: 'Change currency',

};




export class ChangeCurrencyAction implements Action {
  type = ActionTypes.CHANGE_CURRENCY;
  constructor(public payload:string) { }
}


export type Actions
  = ChangeCurrencyAction
