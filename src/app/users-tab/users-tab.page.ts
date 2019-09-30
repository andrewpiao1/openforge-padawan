import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

import * as fromData from '../redux/users.action';
import { Events } from "@ionic/angular";
import { Store } from '@ngrx/store';
import { AppState } from '../redux';

@Component({
  selector: 'app-users-tab',
  templateUrl: 'users-tab.page.html',
  styleUrls: ['users-tab.page.scss']
})

export class UsersPage implements OnInit {

  show: boolean = false;
  userData: any = [];
  userQuery: string

  constructor(
    private store: Store<AppState>,
    private usersService: UsersService,
    public events: Events) { }

  ngOnInit() {
    //   this.users = this.usersService.getItems();
    this.userData = [];
    this.retrieveUsername();
    // this.searchUser();
  }

  retrieveUsername() {
    this.events.subscribe('transferredData', (data) => {
      console.log('transferred: ', data)
      this.userQuery = data;
      this.searchUser(data);
    })
  }

  searchUser(username: string) {
    // console.log(username);
    this.show = true;
    this.usersService.loadUserData(username)
      .then(res => {
        this.userData = res.data
        console.log(this.userData);
      })
      .catch(err => console.log(err))
  }

  // searchUser(username: string){
  //   console.log('Username: ', username);
  //   this.store.dispatch(new fromData.LoadUserData(username))
  //   this.user = this.usersService.loadUserData(username)
  // }

}
