import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Criteres2Component } from './criteres2.component';

describe('Criteres2Component', () => {
  let component: Criteres2Component;
  let fixture: ComponentFixture<Criteres2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Criteres2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Criteres2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
