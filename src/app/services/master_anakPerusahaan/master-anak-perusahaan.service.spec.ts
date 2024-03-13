import { TestBed } from '@angular/core/testing';

import { MasterAnakPerusahaanService } from './master-anak-perusahaan.service';

describe('MasterAnakPerusahaanService', () => {
  let service: MasterAnakPerusahaanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterAnakPerusahaanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
