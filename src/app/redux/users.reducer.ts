import {ActionEx, UsersActionTypes} from './users.action';
import * as fromData from './users.action';

export interface DataState {
  items: string[];
  loading: boolean;
  error: any;
  user: any;
}

export const initialState: DataState = {
  items: [],
  loading: false,
  error: null,
  user: {}
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

    case fromData.ActionTypes.LoadUserData: {
      return {
        ...state,
        loading: true,
        user: action.payload.toString
      }
    }

    case fromData.ActionTypes.LoadUserDataSuccess: {
      return {
        ...state,
        loading: false,
        user: action.payload.data
      }
    }

    default: {
      return state;
    }
  }
}

export const getItems = (state: DataState) => state.items;
export const getUser = (state: DataState) => state.user
