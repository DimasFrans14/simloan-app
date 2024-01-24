import { TestBed } from '@angular/core/testing';

import { MarketUpdateService } from './market-update.service';

describe('MarketUpdateService', () => {
  let service: MarketUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
