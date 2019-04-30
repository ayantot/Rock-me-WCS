import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Criteres1Component } from './criteres1.component';

describe('Criteres1Component', () => {
  let component: Criteres1Component;
  let fixture: ComponentFixture<Criteres1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Criteres1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Criteres1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
