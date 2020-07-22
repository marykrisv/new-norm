import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmenucategoryComponent } from './addmenucategory.component';

describe('AddmenucategoryComponent', () => {
  let component: AddmenucategoryComponent;
  let fixture: ComponentFixture<AddmenucategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmenucategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmenucategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
