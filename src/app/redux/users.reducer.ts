import {ActionEx, UsersActionTypes} from './users.action';
import * as fromData from './users.action';

export interface DataState {
  items: string[];
  loading: boolean;
  error: any;
}

export const initialState: DataState = {
  items: [],
  loading: false,
  error: null
}

export function reducer(
  state = initialState,
  action: fromData.ActionsUnion
): DataState {
  switch (action.type) {
    case fromData.ActionTypes.LoadDataBegin: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }

    case fromData.ActionTypes.LoadDataSuccess: {
      return {
        ...state,
        loading: false,
        items: action.payload.data
      }
    }

    case fromData.ActionTypes.LoadDataFailure: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }

    default: {
      return state;
    }
  }
}

export const getItems = (state: DataState) => state.items;

// export const initialState = [];

// export function UsersReducer (state = initialState, action: ActionEx){
//   switch (action.type){
//     case UsersActionTypes.InitialLoad:
//       return [action.payload];

//     case UsersActionTypes.AddUsers:
//       return [...state, action.payload];

//     default: return state;
//   }
// }