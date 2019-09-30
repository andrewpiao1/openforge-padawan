import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-feed-tab',
  templateUrl: 'feed-tab.page.html',
  styleUrls: ['feed-tab.page.scss']
})
export class FeedPage implements OnInit{

  results: Observable<any>;
  searchTerm: string = '';

  constructor(private usersService: UsersService) {}

  ngOnInit(){
    this.results = this.usersService.getUsers();
    // console.log("ON INIT:", this.results)
  }

}
