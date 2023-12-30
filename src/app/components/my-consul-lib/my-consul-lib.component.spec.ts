import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyConsulLibComponent } from './my-consul-lib.component';

describe('MyConsulLibComponent', () => {
  let component: MyConsulLibComponent;
  let fixture: ComponentFixture<MyConsulLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyConsulLibComponent]
    });
    fixture = TestBed.createComponent(MyConsulLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
