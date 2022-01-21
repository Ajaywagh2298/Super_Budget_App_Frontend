import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanCartComponent } from './scan-cart.component';

describe('ScanCartComponent', () => {
  let component: ScanCartComponent;
  let fixture: ComponentFixture<ScanCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
