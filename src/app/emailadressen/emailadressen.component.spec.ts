import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailadressenComponent } from './emailadressen.component';

describe('EmailadressenComponent', () => {
  let component: EmailadressenComponent;
  let fixture: ComponentFixture<EmailadressenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailadressenComponent]
    });
    fixture = TestBed.createComponent(EmailadressenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
