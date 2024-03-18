import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VorlagenComponent } from './vorlagen.component';

describe('VorlagenComponent', () => {
  let component: VorlagenComponent;
  let fixture: ComponentFixture<VorlagenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VorlagenComponent]
    });
    fixture = TestBed.createComponent(VorlagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
