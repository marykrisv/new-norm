import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcustomertableComponent } from './addcustomertable.component';

describe('AddcustomertableComponent', () => {
  let component: AddcustomertableComponent;
  let fixture: ComponentFixture<AddcustomertableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcustomertableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcustomertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
