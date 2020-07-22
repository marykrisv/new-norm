import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinventorycategoryComponent } from './addinventorycategory.component';

describe('AddinventorycategoryComponent', () => {
  let component: AddinventorycategoryComponent;
  let fixture: ComponentFixture<AddinventorycategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddinventorycategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinventorycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
