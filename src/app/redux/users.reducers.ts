import {ActionEx, UsersActionTypes} from './users.actions';

export const initialState = [];

export function UsersReducer (state = initialState, action: ActionEx){
  switch (action.type){
    case UsersActionTypes.InitialLoad:
      return [action.payload];

    case UsersActionTypes.AddUsers:
      return [...state, action.payload];

    default: return state;
  }
}