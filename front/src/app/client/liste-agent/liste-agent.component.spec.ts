import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAgentComponent } from './liste-agent.component';

describe('ListeAgentComponent', () => {
  let component: ListeAgentComponent;
  let fixture: ComponentFixture<ListeAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
