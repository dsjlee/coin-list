import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-coin-nav',
  templateUrl: './coin-nav.component.html',
  styleUrls: ['./coin-nav.component.css']
})
export class CoinNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver) {}
  
  closeIfOverMode(drawer: MatSidenav) {
    if (drawer.mode === 'over') {
      drawer.close();
    } 
  }
}
