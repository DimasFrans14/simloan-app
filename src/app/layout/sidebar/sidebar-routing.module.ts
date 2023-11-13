import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShlOverviewComponent } from 'src/app/dashboard/shl/shl-overview/shl-overview.component';

const routes: Routes = [
  { path: 'shloverview', component: ShlOverviewComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule { }
