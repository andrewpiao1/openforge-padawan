import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { UsersService } from '../services/users.service';

//Redux
import {Users} from '../models/users';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'app-feed-tab',
  templateUrl: 'feed-tab.page.html',
  styleUrls: ['feed-tab.page.scss']
})


export class FeedPage implements OnInit{

  users: Observable<Users[]>;

  constructor(private usersService: UsersService, private store: Store<{ users: Users[] }>) {
    this.users = store.pipe(select('users'));
  }

  // constructor(private usersService: UsersService) {}

  ngOnInit(){
    this.usersService.loadData().subscribe(data => {
      console.log("SUBSCRIBE: ", data);
    })
    // this.users = this.usersService.getUsers();
    // console.log("ON INIT:", this.results)
  }

}
