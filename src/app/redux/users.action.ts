import { Action } from '@ngrx/store';



// ---- NgRx 1: Manage collection of FEED using Actions ----

export enum ActionTypes {
  //loading feed data
  LoadDataBegin = "[Data] Load data begin",
  LoadDataSuccess = "[Data] Load data success",
  LoadDataFailure = "[Data] Load data failure",

  //loading user data
  LoadUserData = "[User] data begin",
  LoadUserDataSuccess = "[User] data success"
}

//feed data
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

//userData
export class LoadUserData implements Action {
  readonly type = ActionTypes.LoadUserData;
  constructor(public payload:  string) {}
}

export class LoadUserDataSuccess implements Action {
  readonly type = ActionTypes.LoadUserDataSuccess;
  constructor(public payload: { data: any }) {}
}


// ** Loading actions will include a payload; 1) LoadDataSuccess: pass loaded data 2) LoadDataFailure: pass error

export type ActionsUnion = LoadDataBegin | LoadDataSuccess | LoadDataFailure | LoadUserData | LoadUserDataSuccess;