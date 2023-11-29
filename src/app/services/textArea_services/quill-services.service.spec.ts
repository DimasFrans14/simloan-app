import { TestBed } from '@angular/core/testing';

import { QuillServicesService } from './quill-services.service';

describe('QuillServicesService', () => {
  let service: QuillServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuillServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
