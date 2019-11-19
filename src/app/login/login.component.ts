import { Component, OnInit } from '@angular/core';
import { AuthService } from '../api/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  public error: string;

  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit() {
  }
  loginGoogle(){
    this.auth.loginGoogle()
    .pipe(first())
    .subscribe(
      result => this.router.navigate(['']),
      err => this.error = 'Could not authenticate'
    );
  }
  
  public submit() {
    console.log(this.password);
    console.log(this.email);
   
    this.auth.login(this.email, this.password)
      .pipe(first())
      .subscribe(
        result => this.router.navigate(['']),
        err => this.error = 'Could not authenticate'
      );
  }

}
