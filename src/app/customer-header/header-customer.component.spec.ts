import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderCustomerComponent} from './header-customer.component';
import {MatDialog} from "@angular/material/dialog";
import {UserDetailsComponent} from "../user-details/user-details.component";

describe('HeaderCustomerComponent', () => {
  let component: HeaderCustomerComponent;
  let fixture: ComponentFixture<HeaderCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderCustomerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
export class DialogDataExample {
  constructor(public dialog: MatDialog) {}


}
