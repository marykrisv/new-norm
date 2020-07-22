import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstocktypeComponent } from './addstocktype.component';

describe('AddstocktypeComponent', () => {
  let component: AddstocktypeComponent;
  let fixture: ComponentFixture<AddstocktypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstocktypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstocktypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
