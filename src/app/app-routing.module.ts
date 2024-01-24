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
import { CurrencyRateComponent } from './dashboard/paramater_market/market-update/child_market_update/currency-rate/currency-rate.component';
import { InterestRateComponent } from './dashboard/paramater_market/market-update/child_market_update/interest-rate/interest-rate.component';
import { CommoditiesComponent } from './dashboard/paramater_market/market-update/child_market_update/commodities/commodities.component';
import { ImportComponent } from './dashboard/financial_debt/import/import.component';
import { ImportLaporanComponent } from './dashboard/financial_debt/import/import-laporan/import-laporan.component';
import { FinancialReportComponent } from './dashboard/financial_debt/financial-report/financial-report.component';
import { BondYieldComponent } from './dashboard/paramater_market/market-update/child_market_update/bond-yield/bond-yield.component';
import { ImportLaporanMarketUpdateComponent } from './dashboard/paramater_market/market-update/child_market_update/import-laporan-market-update/import-laporan-market-update.component';
import { PreviewLaporanComponent } from './dashboard/paramater_market/market-update/child_market_update/preview-laporan/preview-laporan.component';
import { OverviewComponent } from './dashboard/adm_pinjaman/overview/overview.component';
import { CreateLiabilitiesComponent } from './dashboard/paramater_market/liabilities/create-liabilities/create-liabilities.component';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { PreviewLiabilitiesComponent } from './dashboard/paramater_market/liabilities/preview-liabilities/preview-liabilities.component';

const routes: Routes = [
  //error msg
  {path: 'error', component:FieldErrorDisplayComponent},
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
  { path: 'market_update', component: MarketUpdateComponent, children:
    [
      // {path: 'currency_rate', component: CurrencyRateComponent}
    ]
  },
  { path: 'hitung_fincost', component: HitungFincostComponent},
  { path: 'shl_agreement', component: ShlAgreementComponent},
  { path: 'create_agreement', component: CreateAgreementComponent},
  { path: 'amandement_agreement', component: AmandementAgreementComponent},
  { path: 'analisa_shl', component: AnalisaShlComponent},
  { path: 'report_shl', component:  ReportShlComponent},
  { path: 'detail_agreement', component: DetailAgreementComponent},
  { path: 'financial_import', component: ImportComponent},
  { path: 'financial_report', component: FinancialReportComponent},
  { path: 'adm_overview', component: OverviewComponent},

  //Child Path Market Update Component
  { path: 'market_update/currency_rate', component: CurrencyRateComponent},
  { path: 'market_update/interest_rate', component: InterestRateComponent},
  { path: 'market_update/commodities', component: CommoditiesComponent},
  { path: 'market_update/bond_yield', component: BondYieldComponent},
  { path: 'market_update/importLaporan_marketUpdate', component: ImportLaporanMarketUpdateComponent},
  { path: 'market_update/preview_laporan', component: PreviewLaporanComponent},

  //child path financial-debt
  {path: 'import_laporan', component: ImportLaporanComponent},
  //child path liabilities
  { path: 'create_liabilities', component: CreateLiabilitiesComponent},
  { path: 'preview_liabilities', component: PreviewLiabilitiesComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
