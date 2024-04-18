import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesViewComponent } from './guides-view.component';

describe('GuidesViewComponent', () => {
  let component: GuidesViewComponent;
  let fixture: ComponentFixture<GuidesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuidesViewComponent]
    });
    fixture = TestBed.createComponent(GuidesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
