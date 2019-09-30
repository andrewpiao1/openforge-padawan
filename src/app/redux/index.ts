import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from "@ngrx/store";
import { environment } from '../../environments/environment'

import * as fromData from "./users.reducer";

//1. add data reducer to our reducers
export interface AppState {
    data: fromData.DataState;
}

export const reducers: ActionReducerMap<AppState> = {
    data: fromData.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];

  // create selector at bottom so we can grab the items
export const getDataState = (state: AppState) => state.data;
export const getAllItems = createSelector(
    getDataState,
    fromData.getItems
);