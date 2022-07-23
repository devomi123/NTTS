import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    formdata:any;
    id: number = 0;
    data:any
    constructor( private router:Router ,private http:HttpClient) { }

    ngOnInit(): void {
      this.formdata= new FormGroup({
        firstName: new FormControl(""),
        lastName: new FormControl(""),
        email: new FormControl("",Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
        phoneNumber: new FormControl(""),
        birthdayDate: new FormControl(""),
        password: new FormControl("")
      })


    }
    submitdata(data:any){
    console.log(data);
    fetch('http://localhost:3000/register', {
      method: 'POST',
      body: JSON.stringify({
        // firstName:data.firstName,
        // lastName:data.lastName,
        email: data.email,
         password: data.password,
          // phoneNumber:data.phoneNumber,
          // birthdayDate:data.birthdayDate,


      }),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => response.json()).then(user => {
    console.log('registered', user)
    localStorage.setItem("access_token",JSON.stringify(user.accessToken))

    if(localStorage.getItem("access_token") && EmailValidator){

      this.router.navigate([""])
  }
    })
   }
  }
