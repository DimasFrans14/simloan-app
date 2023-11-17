import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { PraloginComponent } from './pralogin/pralogin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ShlOverviewComponent } from './dashboard/shl/shl-overview/shl-overview.component';
import { MainComponent } from './dashboard/main/main.component';
import { OverviewHarian } from './dashboard/paramater_market/overview-harian/overview-harian.component';
import { FinancingCostComponent } from './dashboard/paramater_market/financing-cost/financing-cost.component';
import { ParameterMarketOverviewComponent } from './dashboard/paramater_market/overview/overview.component';
import { MarketUpdateComponent } from './dashboard/paramater_market/market-update/market-update.component';

const routes: Routes = [

  //Login Path
  { path: '', component: PraloginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },

  //Dashboard Path
  { path: 'main', component: MainComponent },
  { path: 'shloverview', component: ShlOverviewComponent },
  { path: 'overview_trending', component: ParameterMarketOverviewComponent },
  { path: 'overview_harian', component: OverviewHarian },
  { path: 'financing_cost', component: FinancingCostComponent },

  { path: 'market_update', component: MarketUpdateComponent },
  // {
  //   path: 'shloverview',
  //   loadChildren: () => import('./layout/sidebar/sidebar-routing.module').then(m => m.SidebarRoutingModule),
  // },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
