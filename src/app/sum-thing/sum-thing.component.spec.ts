import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumThingComponent } from './sum-thing.component';

describe('SumThingComponent', () => {
  let component: SumThingComponent;
  let fixture: ComponentFixture<SumThingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumThingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
