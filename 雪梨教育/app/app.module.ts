import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';
import { ShequdetailComponent } from './components/shequdetail/shequdetail.component';
import { RenwudetailComponent } from './components/renwudetail/renwudetail.component';
import { TongbukedetailComponent } from './components/tongbukedetail/tongbukedetail.component';
import { HomeCoursedetailComponent } from './components/home-coursedetail/home-coursedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    TongbuComponent,
    ShequComponent,
    HeaderComponent,
    HomeComponent,
    TongbudetailComponent,
    CoursedetailComponent,
    ShequdetailComponent,
    RenwudetailComponent,
    TongbukedetailComponent,
    HomeCoursedetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent,children:[
        {path:'renwudetail',component:RenwudetailComponent},
        {path:'tongbukedetail',component:TongbukedetailComponent},
        {path:'home-coursedetail',component:HomeCoursedetailComponent},
      ]},
      {path:'course',component:CourseComponent},
      {path:'shequ',component:ShequComponent},
      {path:'tongbu',component:TongbuComponent},
      {path:'tongbu/:courseId',component:TongbudetailComponent},
      {path:'course/:courseId',component:CoursedetailComponent},
      {path:'shequ/:shequId',component:ShequdetailComponent},
     
      


    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
