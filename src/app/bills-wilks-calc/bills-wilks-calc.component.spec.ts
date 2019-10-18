import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsWilksCalcComponent } from './bills-wilks-calc.component';

describe('BillsWilksCalcComponent', () => {
  let component: BillsWilksCalcComponent;
  let fixture: ComponentFixture<BillsWilksCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillsWilksCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsWilksCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
