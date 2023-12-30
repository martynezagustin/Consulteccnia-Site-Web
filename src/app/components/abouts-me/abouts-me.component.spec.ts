import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutsMeComponent } from './abouts-me.component';

describe('AboutsMeComponent', () => {
  let component: AboutsMeComponent;
  let fixture: ComponentFixture<AboutsMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutsMeComponent]
    });
    fixture = TestBed.createComponent(AboutsMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
