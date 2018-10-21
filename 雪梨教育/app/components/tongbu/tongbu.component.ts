import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})
export class TongbuComponent implements OnInit {

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
