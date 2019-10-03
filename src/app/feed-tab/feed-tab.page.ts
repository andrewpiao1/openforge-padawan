import { Component, OnInit, ViewChild } from '@angular/core';
// import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

//navigation
import { NavController } from "@ionic/angular";
import {Events} from "@ionic/angular";

//Redux
// import { User } from '../models/users';
import { select, Store } from '@ngrx/store';
import * as fromData from '../redux/users.action';
import { IonInfiniteScroll } from '@ionic/angular';



@Component({
  selector: 'app-feed-tab',
  templateUrl: 'feed-tab.page.html',
  styleUrls: ['feed-tab.page.scss']
})


export class FeedPage implements OnInit {

  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll;

  user: any = {};
  users: any = [];
  state: any = [];

  constructor(
    private usersService: UsersService,
    public navCtrl: NavController,
    public events: Events) {
    }

  ngOnInit() {
    this.usersService.getItems().subscribe(data => {
      this.state = data;
      this.users = this.state.slice(0,15)
      // this.users.push(...data);

      console.log('data retrieved', data)
    })
  }

  loadData(event){

    setTimeout(() => {
      console.log('Done');


      for (let i=0; i<15; i++){
        let currIndex = this.users.length;
        this.users.push(this.state[currIndex])
      }
      // this.users.push(this.state[currIndex])
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.users.length == 90) {
        event.target.disabled = true;
      }
    }, 750);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  goToTabs(event: any){
    console.log("CLICKED: ", event.target.innerText)
    this.sendData(event.target.innerText)
    this.navCtrl.navigateRoot('/tabs/users-tab')
  }
  sendData(data){
    this.events.publish('transferredData', data)
    // console.log("data sent: ", data)
  }

  searchUser(username: string) {
    console.log('Username: ', username);
    this.user.dispatch(new fromData.LoadUserData(username))
    this.user = this.usersService.loadUserData(username)
  }

}
