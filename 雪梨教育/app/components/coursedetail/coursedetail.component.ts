import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }
  courses1Id:number;
  courses1;
  ngOnInit() {
    this.courses1Id=this.router.snapshot.params['courseId'];
    this.http.get('/api/courses1/'+this.courses1Id).subscribe(data=>{
      this.courses1=data;
    })
  }

}
