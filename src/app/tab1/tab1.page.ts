import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  results: Observable<any>;
  searchTerm: string = '';

  constructor(private usersService: UsersService) {}

  ngOnInit(){
    this.results = this.usersService.getUsers();
    // console.log("ON INIT:", this.results)
  }

}
