import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerNearbymallsComponent } from './customer-nearbymalls.component';

describe('CustomerNearbymallsComponent', () => {
  let component: CustomerNearbymallsComponent;
  let fixture: ComponentFixture<CustomerNearbymallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerNearbymallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerNearbymallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
