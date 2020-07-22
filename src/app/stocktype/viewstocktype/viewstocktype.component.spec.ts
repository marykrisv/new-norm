import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstocktypeComponent } from './viewstocktype.component';

describe('ViewstocktypeComponent', () => {
  let component: ViewstocktypeComponent;
  let fixture: ComponentFixture<ViewstocktypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstocktypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstocktypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
