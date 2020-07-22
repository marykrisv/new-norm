import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewinventorycategoryComponent } from './viewinventorycategory.component';

describe('ViewinventorycategoryComponent', () => {
  let component: ViewinventorycategoryComponent;
  let fixture: ComponentFixture<ViewinventorycategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewinventorycategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewinventorycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
