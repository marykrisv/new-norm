import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomertabledetailComponent } from './customertabledetail.component';

describe('CustomertabledetailComponent', () => {
  let component: CustomertabledetailComponent;
  let fixture: ComponentFixture<CustomertabledetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomertabledetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomertabledetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
