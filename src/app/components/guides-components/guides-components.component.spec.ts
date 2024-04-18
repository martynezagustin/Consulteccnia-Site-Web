import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesComponentsComponent } from './guides-components.component';

describe('GuidesComponentsComponent', () => {
  let component: GuidesComponentsComponent;
  let fixture: ComponentFixture<GuidesComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuidesComponentsComponent]
    });
    fixture = TestBed.createComponent(GuidesComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
