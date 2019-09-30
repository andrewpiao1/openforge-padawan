import { Action } from '@ngrx/store'

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