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

  editdata(id: any, data: any) {
    return this.http.delete('http://localhost:3000/empdata/' + id, data).subscribe((res: any) => {
      console.log(res);
      console.log(id);
       return res ;
    })
  }

}
