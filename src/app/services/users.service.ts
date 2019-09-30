import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'https://api.github.com/'
  apiKey = '';

  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private http: HttpClient) { }

  /**
  * Get data from the Github User API
  * map the result to return only the results that we need
  *
  * @param {string} userAvatar User's avatar URL
  * @param {string} userLogin User's login
  * @returns Observable with the search results
  */
 searchData(userAvatar: string, userLogin: string): Observable<any> {
   return this.http.get(`${this.url}users?since=135`).pipe(
     map(results => results['Users'])
   );
 }
}
