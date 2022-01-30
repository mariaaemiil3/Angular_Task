import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  user !: User;
  usersArray : User[]=[];

  constructor(private httpClient : HttpClient) { }

  addUser(newUser:User){
    this.httpClient.post(`${environment.baseUrl}user/register`,newUser);
    this.usersArray.push(newUser);
    console.log(this.usersArray);
    
    return this.usersArray;
  }
}
