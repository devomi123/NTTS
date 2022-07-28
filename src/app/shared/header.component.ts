import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  source: boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {

    if (localStorage.getItem("access_token") != null) {
      this.source = true;
    }
    else {
      this.source = false;

    }
  }
  logout() {
    localStorage.clear()
    this.router.navigate([""]);
    this.source = false;
  }
  // parent() {
  //   this.router.navigate(["parent/"]);

  // }
  header() {
    if (localStorage.getItem("access_token") != null) {

    } else {

    }
  }
}
