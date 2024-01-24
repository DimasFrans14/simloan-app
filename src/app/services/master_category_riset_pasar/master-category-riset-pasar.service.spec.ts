import { TestBed } from '@angular/core/testing';

import { MasterCategoryRisetPasarService } from './master-category-riset-pasar.service';

describe('MasterCategoryRisetPasarService', () => {
  let service: MasterCategoryRisetPasarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterCategoryRisetPasarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
