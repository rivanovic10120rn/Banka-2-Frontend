import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  isLoading: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  login() {
    alert("Login button works!")
    // TODO: otkomentarisati kada back tim zavrsi login, dodati isLoading
    // this.authService.login(
    //   this.loginForm.get('email')?.value,
    //   this.loginForm.get('password')?.value
    // ).subscribe({
    //   next: value => {
    //     // uspesan login, sacuvati value (JWT) u sessionStorage
    //     // redirekcija na pocetnu stranu
    //   },
    //   error: err => {
    //     // prikazati gresku
    //   }
    // })
  }

}
