import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSelectFileComponent } from './button-select-file.component';

describe('ButtonSelectFileComponent', () => {
  let component: ButtonSelectFileComponent;
  let fixture: ComponentFixture<ButtonSelectFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonSelectFileComponent]
    });
    fixture = TestBed.createComponent(ButtonSelectFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
