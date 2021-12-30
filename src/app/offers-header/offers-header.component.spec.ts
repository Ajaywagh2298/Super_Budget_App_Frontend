import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersHeaderComponent } from './offers-header.component';

describe('OffersHeaderComponent', () => {
  let component: OffersHeaderComponent;
  let fixture: ComponentFixture<OffersHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
