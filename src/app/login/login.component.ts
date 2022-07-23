import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logdata: any
  data: any;
  user: any;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.logdata = new FormGroup({
      email: new FormControl("",Validators.required),
      password: new FormControl("",Validators.required),
    })
  }
  logindata(data: any) {
    console.log(data);
    this.http.get('http://localhost:3000/users/').subscribe((res: any) => {
      console.log(res);
      console.log(res.emailAddress);
      this.data = res;
      if (localStorage.getItem("access_token") != null) {
        // this.router.navigate(["dash"])
      }

      for (let i = 0; i <= res.length; i++) {
        if (res[i].email == data.email) {
          // window.location.href="dash"
          localStorage.setItem("access_token", res[i].password);
          alert("Login Success");

          this.router.navigate(["dash"]);
        }
       

      }
    })
  }
}
