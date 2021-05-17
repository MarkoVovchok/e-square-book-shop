import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  userName!: FormControl;
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userName = new FormControl('', Validators.required);
  }

  login() {
    if (this.userName.valid) {
      this.userService.setCurrentUser({ name: this.userName.value });
      this.router.navigate(['shop']);
    }
  }
}
