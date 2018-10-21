import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCoursedetailComponent } from './home-coursedetail.component';

describe('HomeCoursedetailComponent', () => {
  let component: HomeCoursedetailComponent;
  let fixture: ComponentFixture<HomeCoursedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCoursedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCoursedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
