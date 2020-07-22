import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucategorydetailComponent } from './menucategorydetail.component';

describe('MenucategorydetailComponent', () => {
  let component: MenucategorydetailComponent;
  let fixture: ComponentFixture<MenucategorydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenucategorydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenucategorydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
