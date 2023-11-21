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
import { QuillModule } from 'ngx-quill';
// import { MarketUpdateComponent } from './dashboard/paramater_market/market-update/market-update.component';

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
    // MarketUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    SidebarComponent,
    NgApexchartsModule,
    HttpClientModule,
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
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
