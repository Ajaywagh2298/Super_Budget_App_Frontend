import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAimComponent } from './home-aim.component';

describe('HomeAimComponent', () => {
  let component: HomeAimComponent;
  let fixture: ComponentFixture<HomeAimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
