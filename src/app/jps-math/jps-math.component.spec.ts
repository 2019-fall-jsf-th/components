import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpsMathComponent } from './jps-math.component';

describe('JpsMathComponent', () => {
  let component: JpsMathComponent;
  let fixture: ComponentFixture<JpsMathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpsMathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpsMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
