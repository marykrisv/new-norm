import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocktypedetailComponent } from './stocktypedetail.component';

describe('StocktypedetailComponent', () => {
  let component: StocktypedetailComponent;
  let fixture: ComponentFixture<StocktypedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocktypedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocktypedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
