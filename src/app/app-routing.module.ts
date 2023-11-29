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
import { LiabilitiesComponent } from './dashboard/paramater_market/liabilities/liabilities.component';
import { HitungFincostComponent } from './dashboard/paramater_market/financing-cost/hitung-fincost/hitung-fincost.component';
import { ShlAgreementComponent } from './dashboard/shl/shl-agreement/shl-agreement.component';
import { CreateAgreementComponent } from './dashboard/shl/shl-agreement/create-agreement/create-agreement.component';
import { AmandementAgreementComponent } from './dashboard/shl/shl-agreement/amandement-agreement/amandement-agreement.component';
import { AnalisaShlComponent } from './dashboard/shl/shl-overview/analisa-shl/analisa-shl.component';
import { ReportShlComponent } from './dashboard/shl/shl-overview/report-shl/report-shl.component';
import { DetailAgreementComponent } from './dashboard/shl/shl-overview/detail-agreement/detail-agreement.component';

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
  { path: 'liabilities', component: LiabilitiesComponent},
  { path: 'market_update', component: MarketUpdateComponent },
  { path: 'hitung_fincost', component: HitungFincostComponent},
  { path: 'shl_agreement', component: ShlAgreementComponent},
  { path: 'create_agreement', component: CreateAgreementComponent},
  { path: 'amandement_agreement', component: AmandementAgreementComponent},
  { path: 'analisa_shl', component: AnalisaShlComponent},
  { path: 'report_shl', component:  ReportShlComponent},
  { path: 'detail_agreement', component: DetailAgreementComponent},
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
