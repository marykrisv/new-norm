import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorycategorydetailComponent } from './inventorycategorydetail.component';

describe('InventorycategorydetailComponent', () => {
  let component: InventorycategorydetailComponent;
  let fixture: ComponentFixture<InventorycategorydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventorycategorydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorycategorydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
