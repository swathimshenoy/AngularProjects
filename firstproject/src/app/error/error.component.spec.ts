import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorC } from './error.component';

describe('ErrorC', () => {
  let component: ErrorC;
  let fixture: ComponentFixture<ErrorC>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorC ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
