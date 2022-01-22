import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPurchaseHistoryComponent } from './customer-purchase-history.component';

describe('CustomerPurchaseHistoryComponent', () => {
  let component: CustomerPurchaseHistoryComponent;
  let fixture: ComponentFixture<CustomerPurchaseHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerPurchaseHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPurchaseHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
