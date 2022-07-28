import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonapiService {

  constructor(private http:HttpClient) { }
  postempinfo(data:any){
  // return this.http.post<any>("")
  }
}
