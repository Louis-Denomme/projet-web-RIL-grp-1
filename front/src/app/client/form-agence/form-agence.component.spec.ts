import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgenceComponent } from './form-agence.component';

describe('FormAgenceComponent', () => {
  let component: FormAgenceComponent;
  let fixture: ComponentFixture<FormAgenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAgenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
