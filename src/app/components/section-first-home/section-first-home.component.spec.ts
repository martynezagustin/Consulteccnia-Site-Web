import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFirstHomeComponent } from './section-first-home.component';

describe('SectionFirstHomeComponent', () => {
  let component: SectionFirstHomeComponent;
  let fixture: ComponentFixture<SectionFirstHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionFirstHomeComponent]
    });
    fixture = TestBed.createComponent(SectionFirstHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
