import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Apweek6Component } from './apweek6.component';

describe('Apweek6Component', () => {
  let component: Apweek6Component;
  let fixture: ComponentFixture<Apweek6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Apweek6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Apweek6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
