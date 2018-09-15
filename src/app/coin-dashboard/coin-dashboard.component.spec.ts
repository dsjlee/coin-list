
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinDashboardComponent } from './coin-dashboard.component';

describe('CoinDashboardComponent', () => {
  let component: CoinDashboardComponent;
  let fixture: ComponentFixture<CoinDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
