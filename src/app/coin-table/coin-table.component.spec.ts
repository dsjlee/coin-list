
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinTableComponent } from './coin-table.component';

describe('CoinTableComponent', () => {
  let component: CoinTableComponent;
  let fixture: ComponentFixture<CoinTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
