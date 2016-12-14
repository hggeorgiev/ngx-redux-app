import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {StoreModule} from "@ngrx/store";
import {CommonModule} from "@angular/common";
import {NewOperation} from "./new-operation.component";
import {OperationsList} from "./operations-list.component";
import {reducer} from "./common/reducers/index";
import {Currencies} from "./currencies.component";
import {CurrencyEffects} from "./common/effects/currencies";
import {EffectsModule} from "@ngrx/effects";
import { CurrencyService} from "./common/services/currency.service";
import {CustomCurrencyPipe} from "./currencyPipe";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [

    AppComponent,
    NewOperation,
    OperationsList,
    Currencies,
    CustomCurrencyPipe
  ],
  imports: [ // import Angular's modules
    NgbModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    EffectsModule.run(CurrencyEffects),
    StoreModule.provideStore(reducer),


  ],
  providers: [CurrencyService]
})
export class AppModule {
  constructor() {}



}

