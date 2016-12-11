import {Component, Input, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'currencies',
    templateUrl: 'currencies.template.html',
     changeDetection: ChangeDetectionStrategy.OnPush
})
export class Currencies  {
    @Input() currencies:Array<string>;
    @Input() selectedCurrency:string;
    @Output() currencySelected = new EventEmitter();

    constructor() { }

}
