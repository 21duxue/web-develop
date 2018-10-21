import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenwudetailComponent } from './renwudetail.component';

describe('RenwudetailComponent', () => {
  let component: RenwudetailComponent;
  let fixture: ComponentFixture<RenwudetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenwudetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenwudetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
