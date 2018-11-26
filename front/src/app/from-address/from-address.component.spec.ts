import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromAddressComponent } from './from-address.component';

describe('FromAddressComponent', () => {
  let component: FromAddressComponent;
  let fixture: ComponentFixture<FromAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
