import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateTriangleComponent } from './rotate-triangle.component';

describe('RotateTriangleComponent', () => {
  let component: RotateTriangleComponent;
  let fixture: ComponentFixture<RotateTriangleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotateTriangleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotateTriangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
