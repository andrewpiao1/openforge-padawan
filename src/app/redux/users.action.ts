import { Action } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
  LoadDataBegin = "[Data] Load data begin",
  LoadDataSuccess = "[Data] Load data success",
  LoadDataFailure = "[Data] Load data failure",
  LoadUserData = "[User] data begin",
  LoadUserDataSuccess = "[User] data success"
}


export class LoadDataBegin implements Action {
  readonly type = ActionTypes.LoadDataBegin;
}

export class LoadDataSuccess implements Action {
  readonly type = ActionTypes.LoadDataSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadDataFailure implements Action {
  readonly type = ActionTypes.LoadDataFailure;
  constructor(public payload: { error: any }) { }
}


export class LoadUserData implements Action {
  readonly type = ActionTypes.LoadUserData;
  constructor(public payload:  string) {}
}

export class LoadUserDataSuccess implements Action {
  readonly type = ActionTypes.LoadUserDataSuccess;
  constructor(public payload: { data: any }) {}
}

export type ActionsUnion = LoadDataBegin | LoadDataSuccess | LoadDataFailure | LoadUserData | LoadUserDataSuccess;



//----- ACTION TYPES ------
export enum UsersActionTypes {
    InitialLoad = '[User Component] InitialLoad',
    AddUsers = '[User Component] AddUsers'
    // setRedUser = '[User Component] SetRedUser',
    // getUserDataById = '[User Component] GetUserDataById',
}

export class ActionEx implements Action {
    readonly type;
    payload: any;
}

export class UsersLoad implements ActionEx {
  readonly type = UsersActionTypes.InitialLoad;

  constructor (public payload: any){

  }
}

export class UsersAdd implements ActionEx{
  readonly type = UsersActionTypes.AddUsers;

  constructor (public payload: any){

  }

}