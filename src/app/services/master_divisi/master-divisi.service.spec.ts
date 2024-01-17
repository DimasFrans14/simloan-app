import { TestBed } from '@angular/core/testing';

import { MasterDivisiService } from './master-divisi.service';

describe('MasterDivisiService', () => {
  let service: MasterDivisiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterDivisiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
