import { TestBed } from '@angular/core/testing';

import { TablePreviewServicesService } from './table-preview-services.service';

describe('TablePreviewServicesService', () => {
  let service: TablePreviewServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablePreviewServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
