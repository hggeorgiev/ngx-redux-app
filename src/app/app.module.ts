import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {StoreModule} from "@ngrx/store";
import {CommonModule} from "@angular/common";
import {NewOperation} from "./new-operation.component";
import {OperationsList} from "./operations-list.component";
import {reducer} from "./common/reducers/index";
import {Currencies} from "./currencies.component";


@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    NewOperation,
    OperationsList,
    Currencies
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    /**
     * StoreModule.provideStore is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.provideStore(reducer),

  ],
})
export class AppModule {
  constructor() {}



}

