import { Component, OnInit } from '@angular/core';
import { UsersService } from './../services/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  results: Observable<any>;


  constructor(private usersService: UsersService) { }

  ngOnInit() {}
}
