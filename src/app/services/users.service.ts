import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as UserActions from '../redux/users.action';
import { AppState, getAllItems, getDataState } from '../redux';
import axios from 'axios';
// import User from '../models/users'


// import { map } from 'rxjs/operators';

// export enum SearchType {
//   all = '',
//   user = 'user'
// }


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'https://api.github.com/'
  apiKey = '';
  user = {}

  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private store: Store<AppState>, private http: HttpClient) { }

  loadData() {
    return this.http.get(`${this.url}users`);
  }

  load() {
    this.store.dispatch(new UserActions.LoadDataBegin());
  }

  getData() {
    return this.store.select(getDataState);
  }

  getItems() {
    return this.store.select(getAllItems);
  }

  loadUserData(username: string) {
    return axios.get(`${this.url}users/` + `${username}`)
  }

  getUserData() {
    return this.store.select(getAllItems);
  }



  // loadUser() {
  //   this.store.dispatch(new UserActions.LoadUserData())
  // }
}
