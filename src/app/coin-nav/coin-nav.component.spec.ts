
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CoinNavComponent } from './coin-nav.component';

describe('CoinNavComponent', () => {
  let component: CoinNavComponent;
  let fixture: ComponentFixture<CoinNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [CoinNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
