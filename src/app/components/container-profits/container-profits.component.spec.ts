import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerProfitsComponent } from './container-profits.component';

describe('ContainerProfitsComponent', () => {
  let component: ContainerProfitsComponent;
  let fixture: ComponentFixture<ContainerProfitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerProfitsComponent]
    });
    fixture = TestBed.createComponent(ContainerProfitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
