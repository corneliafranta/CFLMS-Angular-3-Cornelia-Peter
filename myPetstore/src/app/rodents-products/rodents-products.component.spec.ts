import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RodentsProductsComponent } from './rodents-products.component';

describe('RodentsProductsComponent', () => {
  let component: RodentsProductsComponent;
  let fixture: ComponentFixture<RodentsProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RodentsProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RodentsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
