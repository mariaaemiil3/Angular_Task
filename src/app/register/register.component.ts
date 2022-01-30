import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../_models/user.model';
import { RegisterService } from '../_services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user!:User;
  message!:string;

  constructor(private userService : RegisterService) { }

  ngOnInit(): void {
    this.addUser(this.user)
  }

  addUser(user:User){
    return this.userService.addUser(user);
  }

  onSubmit(form:NgForm){
    console.log(form);
    
  }
}
