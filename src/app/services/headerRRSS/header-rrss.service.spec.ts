import { TestBed } from '@angular/core/testing';

import { HeaderRRSSService } from './header-rrss.service';

describe('HeaderRRSSService', () => {
  let service: HeaderRRSSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderRRSSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
