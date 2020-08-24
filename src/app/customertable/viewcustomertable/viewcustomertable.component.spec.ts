import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcustomertableComponent } from './viewcustomertable.component';

describe('ViewcustomertableComponent', () => {
  let component: ViewcustomertableComponent;
  let fixture: ComponentFixture<ViewcustomertableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcustomertableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcustomertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
