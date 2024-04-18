import { TestBed } from '@angular/core/testing';

import { UserFormSingUpService } from './user-form-sing-up.service';

describe('UserFormSingUpService', () => {
  let service: UserFormSingUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFormSingUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
