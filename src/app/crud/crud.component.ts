import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { employeemodel } from './employee_dashboard.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor( private http:HttpClient , private router:Router) { }
  formdata:any;
  empdata:any;
  empolyeeobject :employeemodel = new employeemodel()
  ngOnInit(): void {
    this.formdata = new FormGroup({
      empname: new FormControl(""),
      empadd: new FormControl(""),
      empemail: new FormControl(""),
      empmobno: new FormControl(""),
      empdep: new FormControl("")

    })
    this.getdata();
  }
  submit(data:any){
  console.log(data);
  this.http.post('http://localhost:3000/empdata/',data).subscribe((res: any) => {
  console.log(res);
   //this.router.navigate(['crud'])
  //  return true
  })
  }
getdata(){
  this.http.get('http://localhost:3000/empdata/').subscribe((res: any) => {
    console.log(res);
    this.empdata=res

    })
}


}
