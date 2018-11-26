import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemonteeSAVComponent } from './remontee-sav.component';

describe('RemonteeSAVComponent', () => {
  let component: RemonteeSAVComponent;
  let fixture: ComponentFixture<RemonteeSAVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemonteeSAVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemonteeSAVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
