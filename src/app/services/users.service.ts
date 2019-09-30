import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import * as UserActions from '../redux/users.action';
import { AppState, getAllItems, getDataState } from '../redux';
import axios from 'axios';

//// ---- NgRx 3: provide a loadData() method that will return the HTTP request to load the data as an observable, which can be used in @Effect

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

  //individual userData
  loadUserData(username: string) {
    return axios.get(`${this.url}users/` + `${username}`)
  }

  getUserData() {
    return this.store.select(getAllItems);
  }

  // searchData(title: string, type: SearchType): Observable<any> {
  //   return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
  //     map(results => results['Search'])
  //   );


  // loadUser() {
  //   this.store.dispatch(new UserActions.LoadUserData())
  // }
}
