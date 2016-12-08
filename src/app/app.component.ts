
import { Component } from '@angular/core';
import {State, Store} from "@ngrx/store";
import * as operations from "./common/actions/operations"
import {Operation} from "./common/models/operation.model";
/*

 In order to access the application state, reference the reducers folder again,
 accessing all the exported members from it though index.ts
 */
import * as fromRoot from './common/reducers';
@Component({
  selector: 'app-root',
  template: `
      <div class="container">
           
            <new-operation (addOperation)="addOperation($event)"></new-operation>
            <operations-list [operations]="operations| async"  
            (deleteOperation)="deleteOperation($event)"
            (incrementOperation)="incrementOperation($event)"
            (decrementOperation)="decrementOperation($event)"></operations-list>
      </div>
`
})
export class AppComponent {

  public id:number = 0 ; //simulating IDs
  public operations:Array<Operation>;


  constructor(private _store: Store<fromRoot.State>) {
    this.operations = this._store.let(fromRoot.getEntities)

  }


  addOperation(operation) {
    this._store.dispatch(new operations.AddOperationAction({id: ++ this.id,//simulating ID increments
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


