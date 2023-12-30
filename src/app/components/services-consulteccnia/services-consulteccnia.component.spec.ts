import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesConsulteccniaComponent } from './services-consulteccnia.component';

describe('ServicesConsulteccniaComponent', () => {
  let component: ServicesConsulteccniaComponent;
  let fixture: ComponentFixture<ServicesConsulteccniaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesConsulteccniaComponent]
    });
    fixture = TestBed.createComponent(ServicesConsulteccniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
