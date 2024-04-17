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
import { PdbComponent } from './dashboard/paramater_market/market-update/child_market_update/pdb/pdb/pdb.component';
import { InflasiComponent } from './dashboard/paramater_market/market-update/child_market_update/inflasi/inflasi/inflasi.component';
import { PmiComponent } from './dashboard/paramater_market/market-update/child_market_update/pmi/pmi/pmi.component';
import { RetailSalesComponent } from './dashboard/paramater_market/market-update/child_market_update/retail_sales/retail-sales/retail-sales.component';
import { MoneySuplyComponent } from './dashboard/paramater_market/market-update/child_market_update/money_suply/money-suply/money-suply.component';
import { CadanganDevisaComponent } from './dashboard/paramater_market/market-update/child_market_update/cadangan_devisa/cadangan-devisa/cadangan-devisa.component';
import { UsTreasuryComponent } from './dashboard/paramater_market/market-update/child_market_update/us-treasury/us-treasury.component';
import { ShlAgreementDetailComponent } from './dashboard/shl/shl-agreement/shl-agreement-detail/shl-agreement-detail.component';
import { ShlCreateAgreementComponent } from './dashboard/shl/shl-agreement/shl-create-agreement/shl-create-agreement.component';
import { ShlPreviewCreateAgreementComponent } from './dashboard/shl/shl-agreement/shl-create-agreement/shl-preview-create-agreement/shl-preview-create-agreement.component';
import { GMTNComponent } from './dashboard/paramater_market/financing-cost/gmtn/gmtn.component';
import { ShlWithdrawalComponent } from './dashboard/shl/shl-withdrawal/shl-withdrawal.component';
import { ShlCreateWithdrawalComponent } from './dashboard/shl/shl-withdrawal/shl-create-withdrawal/shl-create-withdrawal.component';
import { ShlScheduleComponent } from './dashboard/shl/shl-schedule/shl-schedule.component';
import { ShlCreateScheduleComponent } from './dashboard/shl/shl-schedule/shl-create-schedule/shl-create-schedule.component';
import { ShlMonitoringComponent } from './dashboard/shl/shl-monitoring/shl-monitoring.component';
import { ShlMonitoringDetailComponent } from './dashboard/shl/shl-monitoring/shl-monitoring-detail/shl-monitoring-detail.component';
import { ShlLoanDetailComponent } from './dashboard/shl/shl-monitoring/shl-monitoring-detail/shl-loan-detail/shl-loan-detail.component';
import { RouteGuard } from './guard/route-guard.guard';
import { InputPembayaranComponent } from './dashboard/shl/shl-monitoring/shl-monitoring-detail/shl-loan-detail/input-pembayaran/input-pembayaran.component';
import { ShlSimulationComponent } from './dashboard/shl/shl-simulation/shl-simulation.component';

const routes: Routes = [
  //error msg
  {path: 'error', component:FieldErrorDisplayComponent},
  //Login Path
  { path: '', component: PraloginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },

  //Dashboard Path
  { path: 'main', component: MainComponent , canActivate:[RouteGuard]},
  { path: 'shloverview', component: ShlOverviewComponent ,canActivate:[RouteGuard]},
  { path: 'overview_trending', component: ParameterMarketOverviewComponent ,canActivate:[RouteGuard]},
  { path: 'overview_harian', component: OverviewHarian ,canActivate:[RouteGuard]},
  { path: 'financing_cost', component: FinancingCostComponent ,canActivate:[RouteGuard]},
  { path: 'liabilities', component: LiabilitiesComponent,canActivate:[RouteGuard]},
  { path: 'market_update', component: MarketUpdateComponent, canActivate:[RouteGuard]
  },
  { path: 'hitung_fincost', component: HitungFincostComponent, canActivate:[RouteGuard]},
  { path: 'gmtn', component: GMTNComponent, canActivate:[RouteGuard]},
  { path: 'shl_agreement', component: ShlAgreementComponent, canActivate:[RouteGuard]},
  { path: 'shl_withdrawal', component: ShlWithdrawalComponent, canActivate:[RouteGuard]},
  { path: 'shl_schedule', component: ShlScheduleComponent, canActivate:[RouteGuard]},
  { path: 'shl_monitoring', component: ShlMonitoringComponent, canActivate:[RouteGuard]},
  { path: 'shl_simulation', component: ShlSimulationComponent, canActivate:[RouteGuard]},
  // { path: 'create_agreement', component: CreateAgreementComponent, canActivate:[RouteGuard]},
  // { path: 'amandement_agreement', component: AmandementAgreementComponent, canActivate:[RouteGuard]},
  // { path: 'analisa_shl', component: AnalisaShlComponent, canActivate:[RouteGuard]},
  // { path: 'report_shl', component:  ReportShlComponent, canActivate:[RouteGuard]},
  // { path: 'detail_agreement', component: DetailAgreementComponent, canActivate:[RouteGuard]},
  { path: 'financial_import', component: ImportComponent, canActivate:[RouteGuard]},
  { path: 'financial_report', component: FinancialReportComponent, canActivate:[RouteGuard]},
  { path: 'adm_overview', component: OverviewComponent, canActivate:[RouteGuard]},

  //Child Path Market Update Component
  { path: 'market_update/currency_rate', component: CurrencyRateComponent, canActivate:[RouteGuard]},
  { path: 'market_update/interest_rate', component: InterestRateComponent, canActivate:[RouteGuard]},
  { path: 'market_update/commodities', component: CommoditiesComponent, canActivate:[RouteGuard]},
  { path: 'market_update/bond_yield', component: BondYieldComponent, canActivate:[RouteGuard]},
  { path: 'market_update/pdb', component: PdbComponent, canActivate:[RouteGuard]},
  { path: 'market_update/inflasi', component: InflasiComponent, canActivate:[RouteGuard]},
  { path: 'market_update/pmi', component: PmiComponent, canActivate:[RouteGuard]},
  { path: 'market_update/retail_sales', component: RetailSalesComponent, canActivate:[RouteGuard]},
  { path: 'market_update/money_supply', component: MoneySuplyComponent, canActivate:[RouteGuard]},
  { path: 'market_update/usTrasury', component: UsTreasuryComponent, canActivate:[RouteGuard]},
  { path: 'market_update/cadev', component: CadanganDevisaComponent, canActivate:[RouteGuard]},
  { path: 'market_update/importLaporan_marketUpdate', component: ImportLaporanMarketUpdateComponent, canActivate:[RouteGuard]},
  { path: 'market_update/preview_laporan', component: PreviewLaporanComponent, canActivate:[RouteGuard]},

  //child path financial-debt
  {path: 'import_laporan', component: ImportLaporanComponent, canActivate:[RouteGuard]},
  //child path liabilities
  { path: 'create_liabilities', component: CreateLiabilitiesComponent, canActivate:[RouteGuard]},
  { path: 'preview_liabilities', component: PreviewLiabilitiesComponent, canActivate:[RouteGuard]},

  //Child Path SHL Agreement
  { path: 'shl_agreement/details/:id', component: ShlAgreementDetailComponent, canActivate:[RouteGuard]},
  { path: 'shl_agreement/create', component: ShlCreateAgreementComponent, canActivate:[RouteGuard]},
  { path: 'shl_agreement/preview_create', component: ShlPreviewCreateAgreementComponent, canActivate:[RouteGuard]},

  //Child Path SHL Withdawal
  { path: 'shl_withdrawal/create', component: ShlCreateWithdrawalComponent, canActivate:[RouteGuard]},

  //Chile Path SHL Schedule
  { path: 'shl_schedule/create', component: ShlCreateScheduleComponent, canActivate:[RouteGuard]},

  //Child Path SHL Monitoring
  { path: 'shl_monitoring/details/:id', component: ShlMonitoringDetailComponent, canActivate:[RouteGuard]},
  { path: 'shl_monitoring/details/:id/loan_monitoring/:id', component: ShlLoanDetailComponent, canActivate:[RouteGuard]},
  { path: 'shl_monitoring/input_pembayaran', component: InputPembayaranComponent, canActivate:[RouteGuard]},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
