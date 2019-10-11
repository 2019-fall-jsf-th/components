import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSizingComponent } from './image-sizing.component';

describe('ImageSizingComponent', () => {
  let component: ImageSizingComponent;
  let fixture: ComponentFixture<ImageSizingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSizingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
