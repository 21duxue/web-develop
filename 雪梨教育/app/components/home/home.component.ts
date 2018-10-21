import { Component, OnInit } from '@angular/core';
import { HttpClient }from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }
  course;
  ngOnInit() {
    // this.http.get('/api/course').subscribe((data)=>{
    //   this.course=data;
    //   console.log(data);
    // })
    this.http.get('/api/courses').subscribe((data)=>{
      this.course=data;
      console.log(data);
    })
  }

}
