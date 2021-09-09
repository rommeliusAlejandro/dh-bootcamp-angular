import { TestBed } from '@angular/core/testing';

import { MockedPermissionsService } from './mocked-permissions.service';

describe('MockedPermissionsService', () => {
  let service: MockedPermissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockedPermissionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
