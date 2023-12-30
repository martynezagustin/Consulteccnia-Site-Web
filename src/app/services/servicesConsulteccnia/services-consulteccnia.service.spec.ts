import { TestBed } from '@angular/core/testing';

import { ServicesConsulteccniaService } from './services-consulteccnia.service';

describe('ServicesConsulteccniaService', () => {
  let service: ServicesConsulteccniaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesConsulteccniaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
