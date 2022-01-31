import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../_models/user.model';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User = { email: '', password: '' };
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  checkUser(form: NgForm) {
    this.user.email = form.value['email'];

    this.user.password = form.value['password'];

    this.userService.checkUser(this.user);
    console.log();
  }

  onCancel(form:NgForm){
    form.reset();
  }
}
