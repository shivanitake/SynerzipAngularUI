import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  constructor(private http: HttpClient) { }
  private endpoint = 'https://jsonplaceholder.typicode.com/users';
  getList(): Observable<any> {
  return this.http.get(this.endpoint);
  }
}
