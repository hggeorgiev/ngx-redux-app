import {Component, Input, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'currencies',
    template: `
    '<div [ngModel]="selectedCurrency" (ngModelChange)="currencySelected.emit($event)" ngbRadioGroup name="radioBasic">
    <label *ngFor="let currency of currencies" class="btn btn-primary">
    <input type="radio" [value]="currency"> {{currency}}
    </label>
    </div>`,
     changeDetection: ChangeDetectionStrategy.OnPush
})
export class Currencies  {
    @Input() currencies:Array<string>;
    @Input() selectedCurrency:string;
    @Output() currencySelected = new EventEmitter();

    constructor() { }

}
