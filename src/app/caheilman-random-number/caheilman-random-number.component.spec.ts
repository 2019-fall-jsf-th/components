import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaheilmanRandomNumberComponent } from './caheilman-random-number.component';

describe('CaheilmanRandomNumberComponent', () => {
  let component: CaheilmanRandomNumberComponent;
  let fixture: ComponentFixture<CaheilmanRandomNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaheilmanRandomNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaheilmanRandomNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
