import { TestBed } from '@angular/core/testing';

import { ShlAgreementService } from './shl-agreement.service';

describe('ShlAgreementService', () => {
  let service: ShlAgreementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShlAgreementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
