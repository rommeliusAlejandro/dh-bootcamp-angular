import { TestBed } from '@angular/core/testing';

import { Get.ExternalSalesGuard } from './get.external-sales.guard';

describe('Get.ExternalSalesGuard', () => {
  let guard: Get.ExternalSalesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Get.ExternalSalesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
