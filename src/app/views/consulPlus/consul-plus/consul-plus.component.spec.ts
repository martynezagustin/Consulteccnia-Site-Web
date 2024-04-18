import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulPlusComponent } from './consul-plus.component';

describe('ConsulPlusComponent', () => {
  let component: ConsulPlusComponent;
  let fixture: ComponentFixture<ConsulPlusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsulPlusComponent]
    });
    fixture = TestBed.createComponent(ConsulPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
