import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalizarComponent } from './digitalizar.component';

describe('DigitalizarComponent', () => {
  let component: DigitalizarComponent;
  let fixture: ComponentFixture<DigitalizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalizarComponent]
    });
    fixture = TestBed.createComponent(DigitalizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
