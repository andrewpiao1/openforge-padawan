import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

//navigation
import { NavController } from "@ionic/angular";
import {Events} from "@ionic/angular";

//Redux
// import { User } from '../models/users';
import { select, Store } from '@ngrx/store';
import * as fromData from '../redux/users.action';


@Component({
  selector: 'app-feed-tab',
  templateUrl: 'feed-tab.page.html',
  styleUrls: ['feed-tab.page.scss']
})


export class FeedPage implements OnInit {

  user: any = {};
  users: any = [];
  numTimesLeft = 5;

  constructor(
    private usersService: UsersService,
    public navCtrl: NavController,
    public events: Events) {
    this.addMoreUsers();
   }

  ngOnInit() {

    //retrieve data from the state (from users.service)
    this.users = this.usersService.getItems();
    // this.goToTabs();
    //check datastore for user objects
    // this.usersService.getData().subscribe(data => {
    //   console.log('subscribe: ', data)
    // })
  }


  goToTabs(event: any){
    console.log("CLICKED: ", event.target.innerText)

    this.navCtrl.navigateRoot('/tabs/users-tab')
    this.sendData(event.target.innerText)
  }
  sendData(data){
    this.events.publish('transferredData', data)
    // console.log("data sent: ", data)
  }

  loadUsers(event) {
    setTimeout(() => {
      console.log('Done');
      this.addMoreUsers();
      this.numTimesLeft -= 1;
      event.target.complete();
    }, 2000);
  }

  addMoreUsers() {
    for (let i = 0; i < 10; i++) {
      this.users.push(i);
    }
  }

  searchUser(username: string) {
    console.log('Username: ', username);
    this.user.dispatch(new fromData.LoadUserData(username))
    this.user = this.usersService.loadUserData(username)
  }
}
