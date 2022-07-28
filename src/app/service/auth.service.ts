import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }


  constructor() { }
}
