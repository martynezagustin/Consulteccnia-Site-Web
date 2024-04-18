import { TestBed } from '@angular/core/testing';

import { PrivateRoutingDashboardService } from './private-routing-dashboard.service';

describe('PrivateRoutingDashboardService', () => {
  let service: PrivateRoutingDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivateRoutingDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
