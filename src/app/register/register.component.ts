import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  displayStyle: string= 'none';
  loginForm: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  closePopup(){
    this.displayStyle = 'none';
  }

  onLoginClick(){
    this.displayStyle = 'block';
    this.loginForm = true;
  }

  onSignUpClick(){
    this.displayStyle = 'block';
    this.loginForm = false;
  }

}
