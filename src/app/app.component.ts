
import {Component, OnInit} from '@angular/core';
import {State, Store} from "@ngrx/store";
import * as operations from "./common/actions/operations"
import * as currencies from "./common/actions/currencies"
import {Operation} from "./common/models/operation.model";
/*

 In order to access the application state, reference the reducers folder again,
 accessing all the exported members from it though index.ts
 */
import * as fromRoot from './common/reducers';
import {Observable} from "rxjs";
@Component({
  selector: 'app-root',
  template: `
      <div class="container">
    
            <new-operation (addOperation)="addOperation($event)"></new-operation>
            <currencies (currencySelected)="onCurrencySelected($event)" [currencies]="currencies | async" [selectedCurrency]="selectedCurrency | async"></currencies>
            <operations-list [operations]="operations| async"
            [selectedCurrency]="selectedCurrency | async"
            (deleteOperation)="deleteOperation($event)"
            (incrementOperation)="incrementOperation($event)"
            (decrementOperation)="decrementOperation($event)"></operations-list>
      </div>
`
})
export class AppComponent {

  public id:number = 0 ; //simulating IDs
  public operations:Observable<Operation[]>;
  public currencies:Observable<string[]>;
  public selectedCurrency: Observable<string>;


  constructor(private _store: Store<fromRoot.State>) {
    this.operations = this._store.let(fromRoot.getEntities);
    this.currencies = this._store.let(fromRoot.getCurrencyEntities);
    this.selectedCurrency = this._store.let(fromRoot.getSelectedCurrency);
    _store.dispatch( new currencies.LoadCurrencyRatesAction(''))


  }

  onCurrencySelected(currency:string) {
    this._store.dispatch(new currencies.ChangeCurrencyAction(currency))
  }

  addOperation(operation) {
    this._store.dispatch(new operations.AddOperationAction({
        id: ++ this.id,//simulating ID increments
      reason: operation.reason,
      amount: operation.amount
    })
    );
  }



  incrementOperation(operation){
    this._store.dispatch(new operations.IncrementOperationAction(operation))
  }

  decrementOperation(operation) {
    this._store.dispatch(new operations.DecrementOperationAction(operation))
  }


  deleteOperation(operation) {
    this._store.dispatch(new operations.RemoveOperationAction(operation))
  }





}


