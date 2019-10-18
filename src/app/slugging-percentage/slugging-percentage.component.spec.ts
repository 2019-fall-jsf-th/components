import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SluggingPercentageComponent } from './slugging-percentage.component';

describe('SluggingPercentageComponent', () => {
  let component: SluggingPercentageComponent;
  let fixture: ComponentFixture<SluggingPercentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SluggingPercentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SluggingPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
