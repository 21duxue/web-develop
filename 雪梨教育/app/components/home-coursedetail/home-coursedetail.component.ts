import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-coursedetail',
  templateUrl: './home-coursedetail.component.html',
  styleUrls: ['./home-coursedetail.component.css']
})
export class HomeCoursedetailComponent implements OnInit {

  constructor(private http:HttpClient) { }
  courses1;
  ngOnInit() {
    this.http.get('/api/courses1').subscribe(data=>{
      this.courses1=data;
    })
  }
}
export class Course1{
  constructor(
      public id:number,
      public courseName:string,
      public images:string, 
      public task:number,
      public person:number,
      public text:string
  ){}
}
