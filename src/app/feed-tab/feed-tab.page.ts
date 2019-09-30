import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

//Redux
import { Users } from '../models/users';
import { select, Store } from '@ngrx/store';


@Component({
  selector: 'app-feed-tab',
  templateUrl: 'feed-tab.page.html',
  styleUrls: ['feed-tab.page.scss']
})


export class FeedPage implements OnInit {

  users: any = []

  constructor(private usersService: UsersService) { }
  // constructor(private usersService: UsersService) {}

  ngOnInit() {
    //retrieve data from the state (from users.service)
    this.users = this.usersService.getItems();

    //check datastore for user objects
    // this.usersService.getData().subscribe(data => {
    //   console.log('subscribe: ', data)
    // })
  }

}
