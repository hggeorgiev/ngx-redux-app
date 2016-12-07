import { Action } from '@ngrx/store';

export const ActionTypes = {
  OPEN_SIDENAV:   '[Layout] Open Sidenav',
  CLOSE_SIDENAV:  '[Layout] Close Sidenav'
};


export class OpenSidenavAction implements Action {
  type = ActionTypes.OPEN_SIDENAV;
}

export class CloseSidenavAction implements Action {
  type = ActionTypes.CLOSE_SIDENAV;
}


export type Actions
  = OpenSidenavAction
  | CloseSidenavAction;
