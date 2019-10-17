import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpSubtractComponent } from './jp-subtract.component';

describe('JpSubtractComponent', () => {
  let component: JpSubtractComponent;
  let fixture: ComponentFixture<JpSubtractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpSubtractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpSubtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
