import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GregCardComponent } from './greg-card.component';

describe('GregCardComponent', () => {
  let component: GregCardComponent;
  let fixture: ComponentFixture<GregCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GregCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GregCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
