import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSpaceLayoutComponent } from './client-space-layout.component';

describe('ClientSpaceLayoutComponent', () => {
  let component: ClientSpaceLayoutComponent;
  let fixture: ComponentFixture<ClientSpaceLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSpaceLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSpaceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
