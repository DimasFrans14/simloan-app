import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PraloginComponent } from './pralogin/pralogin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

import { NgApexchartsModule } from 'ng-apexcharts';
import { ShlOverviewComponent } from './dashboard/shl/shl-overview/shl-overview.component';
import { MainComponent } from './dashboard/main/main.component';
import { ParameterMarketOverviewComponent } from './dashboard/paramater_market/overview/overview.component';
import { OverviewHarian } from './dashboard/paramater_market/overview-harian/overview-harian.component';
import { LiabilitiesComponent } from './dashboard/paramater_market/liabilities/liabilities.component';
import { FinancingCostComponent } from './dashboard/paramater_market/financing-cost/financing-cost.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { MarketUpdateComponent } from './dashboard/paramater_market/market-update/market-update.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { QuillModule } from 'ngx-quill';
import { HitungFincostComponent } from './dashboard/paramater_market/financing-cost/hitung-fincost/hitung-fincost.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ShlAgreementComponent } from './dashboard/shl/shl-agreement/shl-agreement.component';
import { CreateAgreementComponent } from './dashboard/shl/shl-agreement/create-agreement/create-agreement.component';
import { AmandementAgreementComponent } from './dashboard/shl/shl-agreement/amandement-agreement/amandement-agreement.component';
import { AnalisaShlComponent } from './dashboard/shl/shl-overview/analisa-shl/analisa-shl.component';
import { ReportShlComponent } from './dashboard/shl/shl-overview/report-shl/report-shl.component';
import { DetailAgreementComponent } from './dashboard/shl/shl-overview/detail-agreement/detail-agreement.component';
// import { MarketUpdateComponent } from './dashboard/paramater_market/market-update/market-update.component';
import { CurrencyRateComponent } from './dashboard/paramater_market/market-update/child_market_update/currency-rate/currency-rate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validator } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxCaptureModule } from 'ngx-capture';
import { InterestRateComponent } from './dashboard/paramater_market/market-update/child_market_update/interest-rate/interest-rate.component';
import { CommoditiesComponent } from './dashboard/paramater_market/market-update/child_market_update/commodities/commodities.component';
import { ImportComponent } from './dashboard/financial_debt/import/import.component';
import { ImportLaporanComponent } from './dashboard/financial_debt/import/import-laporan/import-laporan.component';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { FinancialReportComponent } from './dashboard/financial_debt/financial-report/financial-report.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { BondYieldComponent } from './dashboard/paramater_market/market-update/child_market_update/bond-yield/bond-yield.component';
import { ImportLaporanMarketUpdateComponent } from './dashboard/paramater_market/market-update/child_market_update/import-laporan-market-update/import-laporan-market-update.component';
import { PreviewLaporanComponent } from './dashboard/paramater_market/market-update/child_market_update/preview-laporan/preview-laporan.component';
import { CreateLiabilitiesComponent } from './dashboard/paramater_market/liabilities/create-liabilities/create-liabilities.component';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { PreviewLiabilitiesComponent } from './dashboard/paramater_market/liabilities/preview-liabilities/preview-liabilities.component';
import { OverviewComponent } from './dashboard/adm_pinjaman/overview/overview.component';
import { LoanProfileComponent } from './dashboard/adm_pinjaman/loan-profile/loan-profile.component';
import { PdbComponent } from './dashboard/paramater_market/market-update/child_market_update/pdb/pdb/pdb.component';
import { InflasiComponent } from './dashboard/paramater_market/market-update/child_market_update/inflasi/inflasi/inflasi.component';
import { PmiComponent } from './dashboard/paramater_market/market-update/child_market_update/pmi/pmi/pmi.component';
import { RetailSalesComponent } from './dashboard/paramater_market/market-update/child_market_update/retail_sales/retail-sales/retail-sales.component';
import { MoneySuplyComponent } from './dashboard/paramater_market/market-update/child_market_update/money_suply/money-suply/money-suply.component';
import { CadanganDevisaComponent } from './dashboard/paramater_market/market-update/child_market_update/cadangan_devisa/cadangan-devisa/cadangan-devisa.component';
import { UsTreasuryComponent } from './dashboard/paramater_market/market-update/child_market_update/us-treasury/us-treasury.component';
import { GMTNComponent } from './dashboard/paramater_market/financing-cost/gmtn/gmtn.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PraloginComponent,
    ForgotPasswordComponent,
    ShlOverviewComponent,
    MainComponent,
    ParameterMarketOverviewComponent,
    OverviewHarian,
    LiabilitiesComponent,
    FinancingCostComponent,
    MarketUpdateComponent,
    HitungFincostComponent,
    FooterComponent,
    ShlAgreementComponent,
    CreateAgreementComponent,
    AmandementAgreementComponent,
    AnalisaShlComponent,
    ReportShlComponent,
    DetailAgreementComponent,
    CurrencyRateComponent,
    InterestRateComponent,
    CommoditiesComponent,
    ImportComponent,
    ImportLaporanComponent,
    FinancialReportComponent,
    BondYieldComponent,
    ImportLaporanMarketUpdateComponent,
    PreviewLaporanComponent,
    CreateLiabilitiesComponent,
    FieldErrorDisplayComponent,
    PreviewLiabilitiesComponent,
    OverviewComponent,
    LoanProfileComponent,
    PdbComponent,
    InflasiComponent,
    PmiComponent,
    RetailSalesComponent,
    MoneySuplyComponent,
    CadanganDevisaComponent,
    UsTreasuryComponent,
    GMTNComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    HeaderComponent,
    SidebarComponent,
    NgApexchartsModule,
    HttpClientModule,
    NgxDropzoneModule,
    NgxCaptureModule,
    FormsModule, 
    MatStepperModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatMomentDateModule,
    // FormBuilder,
    // Validators,
    QuillModule.forRoot({
      bounds:"#quill-container",
      modules: {
        syntax: true,
        toolbar:[
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],

          // [{ 'header': 1 }, { 'header': 2 }],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          // [{ 'script': 'sub'}, { 'script': 'super' }],
          [{ 'indent': '-1'}, { 'indent': '+1' }],
          [{ 'direction': 'rtl' }],

          [{ 'size': ['small', false, 'large', 'huge'] }],
          // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

          [{ 'color': [] }, { 'background': [] }],
          // [{ 'font': [] }],
          [{ 'align': [] }],

          ['link', 'image', 'video'],

          // ['clean'],
        ]
      },
      scrollingContainer: "#quill-container"
    }),
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
