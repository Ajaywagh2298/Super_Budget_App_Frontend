import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeLoginViewComponent} from './home-login-view.component';

describe('HomeLoginViewComponent', () => {
  let component: HomeLoginViewComponent;
  let fixture: ComponentFixture<HomeLoginViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeLoginViewComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLoginViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
