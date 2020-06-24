import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogProductsComponent } from './dog-products.component';

describe('DogProductsComponent', () => {
  let component: DogProductsComponent;
  let fixture: ComponentFixture<DogProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
