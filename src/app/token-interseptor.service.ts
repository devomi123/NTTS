import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterseptorService implements HttpInterceptor {

  constructor( private injector:Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let  user = localStorage.getItem("user");
    console.log(user);
  let tokenizereq = req.clone({
     setHeaders:{
        Authorization :`omkar ${user}`
     }
  })
    return next.handle(tokenizereq)
  }
}
