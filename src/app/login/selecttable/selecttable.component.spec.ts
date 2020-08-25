import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecttableComponent } from './selecttable.component';

describe('SelecttableComponent', () => {
  let component: SelecttableComponent;
  let fixture: ComponentFixture<SelecttableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecttableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
