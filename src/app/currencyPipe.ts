import { Pipe, PipeTransform } from '@angular/core';
import * as fromRoot from './common/reducers';
import {State, Store} from "@ngrx/store";
const fx = require('money');
fx.base = "USD";

@Pipe({
  name: 'currencyPipe',
})
export class CustomCurrencyPipe implements PipeTransform {

  constructor(private _store: Store<fromRoot.State>) {
    this._store.let(fromRoot.getCurrencyRates).subscribe((rates) => {
      fx.rates = rates;
    });
  }

  transform(value: number , currency): string {
      if(currency != null) {
        value = fx.convert(value,  {from: "USD" , to: currency});
        return currency + ' ' + value;
      } else {
        return 'USD' + ' ' + value ;
      }
  }
}
