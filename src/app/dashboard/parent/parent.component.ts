import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {



  constructor(private http:HttpClient) { }
  // beverages=['milk','tea','coffee','juice']
   student =[{name:'omkar',
   add:'kolhapur',
  email:'omkar@gmail.com'}];
  customername = [];
   parentdata:any='' ;
  data: any = [];
  ngOnInit(): void {
  }

//  addBeverage(newBeverage:string){
//  this.beverages.push(newBeverage);
//   }
  customer() {
    this.data = this.student
    // this.router.navigate(['/child'])
    console.log(this.data)
    return false
  }
  recivedata(data:any) {
    console.log(data);
    for(let i=0;i<this.student.length;i++){
      this.student[i].add=data.add
      this.student[i].name=data.name
      this.student[i].email=data.email;
    }
  //   //const newname = this.student[]
  //   this.student.name=data.name;
  //   this.student.email=data.email;
  //   this.student.add=data.add;

  //   // localStorage.setItem("student", data);
  //   this.http.post('http://localhost:3000/student',{student:data}).subscribe((res:any)=>{
  //     console.log(res);

  //   })

  //   // this.customername.push(event)
  //   console.log(data);
  //     return false
  }

}
