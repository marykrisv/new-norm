import { TestBed } from '@angular/core/testing';

import { MenucategoryService } from './menucategory.service';

describe('MenucategoryService', () => {
  let service: MenucategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenucategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
