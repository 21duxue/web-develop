import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tongbukedetail',
  templateUrl: './tongbukedetail.component.html',
  styleUrls: ['./tongbukedetail.component.css']
})
export class TongbukedetailComponent implements OnInit {

  constructor(private http:HttpClient) { }
  courses;
  ngOnInit() {
    this.http.get('/api/courses').subscribe(data=>{
      this.courses=data;
    })
  }

}
export class Course{
  constructor(
      public id:number,
      public courseName:string,
      public images:string, 
      public task:number,
      public person:number,
      public text:string
  ){}
}

