import { TestBed } from '@angular/core/testing';

import { InventorycategoryService } from './inventorycategory.service';

describe('InventorycategoryService', () => {
  let service: InventorycategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventorycategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
