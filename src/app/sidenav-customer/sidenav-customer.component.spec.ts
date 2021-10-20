import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavCustomerComponent } from './sidenav-customer.component';

describe('SidenavCustomerComponent', () => {
  let component: SidenavCustomerComponent;
  let fixture: ComponentFixture<SidenavCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
