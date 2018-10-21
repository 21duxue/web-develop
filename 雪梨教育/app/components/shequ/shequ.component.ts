import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {

  constructor(private http:HttpClient) { }
  shequs;
  ngOnInit() {
    this.http.get('/api/shequs').subscribe(data=>{
      this.shequs=data;
    })
  }

}
export class Shequ{
  constructor(
      public id:number,
      public touxiang:string,
      public courseName:string,
      public images:string, 
      public person:number,
      public personName:string
  ){}
}