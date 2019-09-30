import * as fromData from './users.action';


// ---- NgRx 2: Defining reducers for FEED data loading

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
    //from feed data actions
    case fromData.ActionTypes.LoadDataBegin: { //returns new state
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

    //from user data actions
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

//functions specifically to return items in the state
export const getItems = (state: DataState) => state.items;
export const getUser = (state: DataState) => state.user
