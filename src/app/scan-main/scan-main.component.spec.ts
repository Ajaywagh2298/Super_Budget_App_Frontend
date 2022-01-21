import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanMainComponent } from './scan-main.component';

describe('ScanMainComponent', () => {
  let component: ScanMainComponent;
  let fixture: ComponentFixture<ScanMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
