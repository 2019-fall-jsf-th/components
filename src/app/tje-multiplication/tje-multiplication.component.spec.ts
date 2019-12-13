import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TjeMultiplicationComponent } from './tje-multiplication.component';

describe('TjeMultiplicationComponent', () => {
  let component: TjeMultiplicationComponent;
  let fixture: ComponentFixture<TjeMultiplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TjeMultiplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TjeMultiplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
