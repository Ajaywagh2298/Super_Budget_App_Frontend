import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersProductComponent } from './offers-product.component';

describe('OffersProductComponent', () => {
  let component: OffersProductComponent;
  let fixture: ComponentFixture<OffersProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
