import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WisconsinSalesTaxComponent } from './wisconsin-sales-tax.component';

describe('WisconsinSalesTaxComponent', () => {
  let component: WisconsinSalesTaxComponent;
  let fixture: ComponentFixture<WisconsinSalesTaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WisconsinSalesTaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WisconsinSalesTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
