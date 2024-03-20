import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsendenComponent } from './emailsenden.component';

describe('EmailsendenComponent', () => {
  let component: EmailsendenComponent;
  let fixture: ComponentFixture<EmailsendenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailsendenComponent]
    });
    fixture = TestBed.createComponent(EmailsendenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
