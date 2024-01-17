import { TestBed } from '@angular/core/testing';

import { MasterRoleService } from './master-role.service';

describe('MasterRoleService', () => {
  let service: MasterRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
