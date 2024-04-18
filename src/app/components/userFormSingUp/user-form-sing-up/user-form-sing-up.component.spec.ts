import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormSingUpComponent } from './user-form-sing-up.component';

describe('UserFormSingUpComponent', () => {
  let component: UserFormSingUpComponent;
  let fixture: ComponentFixture<UserFormSingUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFormSingUpComponent]
    });
    fixture = TestBed.createComponent(UserFormSingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
