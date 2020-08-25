import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomernameComponent } from './customername.component';

describe('CustomernameComponent', () => {
  let component: CustomernameComponent;
  let fixture: ComponentFixture<CustomernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
