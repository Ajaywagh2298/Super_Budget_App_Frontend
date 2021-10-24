import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLrDividerComponent } from './home-lr-divider.component';

describe('HomeLrDividerComponent', () => {
  let component: HomeLrDividerComponent;
  let fixture: ComponentFixture<HomeLrDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLrDividerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLrDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
