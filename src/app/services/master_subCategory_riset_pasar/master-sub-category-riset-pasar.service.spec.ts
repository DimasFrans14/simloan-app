import { TestBed } from '@angular/core/testing';

import { MasterSubCategoryRisetPasarService } from './master-sub-category-riset-pasar.service';

describe('MasterSubCategoryRisetPasarService', () => {
  let service: MasterSubCategoryRisetPasarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterSubCategoryRisetPasarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
