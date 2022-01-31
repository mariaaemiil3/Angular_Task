import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { User } from '../_models/user.model';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user: User = { email: '', password: '' };
  message!: string;
  usersArray!: User[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  addUser(user: User) {
    return this.userService.addUser(user);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.user.email = form.value['email'];
    if (form.value['password'] === form.value['rePassword'])
      this.user.password = form.value['password'];
    else
      console.log("Passwords don't match");
      
    console.log(this.user);

    this.addUser(this.user);
  }

  onCancel(form: NgForm) {
    form.reset();
  }
}
