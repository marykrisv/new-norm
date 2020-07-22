import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmenucategoryComponent } from './viewmenucategory.component';

describe('ViewmenucategoryComponent', () => {
  let component: ViewmenucategoryComponent;
  let fixture: ComponentFixture<ViewmenucategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmenucategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmenucategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
