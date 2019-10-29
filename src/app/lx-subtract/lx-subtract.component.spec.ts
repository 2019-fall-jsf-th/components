import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LxSubtractComponent } from './lx-subtract.component';

describe('LxSubtractComponent', () => {
  let component: LxSubtractComponent;
  let fixture: ComponentFixture<LxSubtractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LxSubtractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LxSubtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
