import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoinTableComponent }   from './coin-table/coin-table.component';
import { CoinDashboardComponent }   from './coin-dashboard/coin-dashboard.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/coinlist', pathMatch: 'full' },
  { path: '', component: CoinTableComponent },
  { path: 'coinlist', component: CoinTableComponent },
  { path: 'globaldata', component: CoinDashboardComponent },
  { path: 'about', component: CoinDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
