import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vorlage2Component } from './vorlage2.component';

describe('Vorlage2Component', () => {
  let component: Vorlage2Component;
  let fixture: ComponentFixture<Vorlage2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Vorlage2Component]
    });
    fixture = TestBed.createComponent(Vorlage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
