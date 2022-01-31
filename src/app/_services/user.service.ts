import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user!: User;
  check!:boolean;
  usersArray: User[] = [
    {
      email: 'mariaemil55@gmail.com',
      password: 'maria1234',
    },
  ];

  constructor(private httpClient: HttpClient) {}

  addUser(newUser: User) {
    //this.httpClient.post(`${environment.baseUrl}user/register`,newUser);
    this.usersArray.push(newUser);
    console.log(this.usersArray);

    return this.usersArray;
  }

  checkUser(loggingUser: User): boolean {

    this.usersArray.find((u) => {
      if (u.email == loggingUser.email) {
        
        if (u.password == loggingUser.password){
          this.check = true;
          
        } 
        else this.check = false;
      } 
      else this.check = false;
    });
    return this.check;
  }
}
