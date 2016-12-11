// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/toArray';
// import 'rxjs/add/operator/startWith';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/skip';
// import 'rxjs/add/operator/takeUntil';
// import 'rxjs/add/observable/of';
// import { Injectable } from '@angular/core';
// import { Effect, Actions } from '@ngrx/effects';
// import { Observable } from 'rxjs/Observable';
// import * as categoryActions from '../actions/categories';
// import {LoadCategoriesSuccessAction} from "../actions/categories";
// import {CategoriesService} from "../services/categories.service";
//
//
// @Injectable()
// export class CategoryEffects {
//   constructor(
//     private _actions: Actions,
//     private _categoriesService: CategoriesService
//   ) { }
//
//
//
//   @Effect() loadCategories$ = this._actions.ofType(categoryActions.CategoriesActionTypes.LOAD_CATEGORIES)
//     .switchMap(() => this._categoriesService.loadCategories()
//       .map((categories) => new LoadCategoriesSuccessAction(categories) )
//       .catch(() => Observable.of( new LoadCategoriesSuccessAction([])))
//     );
//
//
//
//
//
// }
