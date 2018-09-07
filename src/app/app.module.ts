import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoinNavComponent } from './coin-nav/coin-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { 
  MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule, 
  MatGridListModule, 
  MatCardModule, 
  MatMenuModule, 
  MatTableModule, 
  MatPaginatorModule, 
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatBottomSheetModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatBadgeModule 
} from '@angular/material';
import { CoinDashboardComponent } from './coin-dashboard/coin-dashboard.component';
import { CoinTableComponent, CoinBottomSheet } from './coin-table/coin-table.component';
import { AppRoutingModule } from './/app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CoinNavComponent,
    CoinDashboardComponent,
    CoinTableComponent,
    CoinBottomSheet
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatBadgeModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [CoinBottomSheet],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
