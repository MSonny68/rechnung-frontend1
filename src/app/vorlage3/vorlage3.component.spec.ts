import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vorlage3Component } from './vorlage3.component';

describe('Vorlage3Component', () => {
  let component: Vorlage3Component;
  let fixture: ComponentFixture<Vorlage3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Vorlage3Component]
    });
    fixture = TestBed.createComponent(Vorlage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
