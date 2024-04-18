import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessTrustComponent } from './business-trust.component';

describe('BusinessTrustComponent', () => {
  let component: BusinessTrustComponent;
  let fixture: ComponentFixture<BusinessTrustComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessTrustComponent]
    });
    fixture = TestBed.createComponent(BusinessTrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
