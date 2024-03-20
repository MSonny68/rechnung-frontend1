import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vorlage1Component } from './vorlage1.component';

describe('Vorlage1Component', () => {
  let component: Vorlage1Component;
  let fixture: ComponentFixture<Vorlage1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Vorlage1Component]
    });
    fixture = TestBed.createComponent(Vorlage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
