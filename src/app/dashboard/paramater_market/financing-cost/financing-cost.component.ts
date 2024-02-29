import { Component } from '@angular/core';
import { TableServicesService } from 'src/app/services/table_services/table-services.service';
import { MarketUpdateService } from 'src/app/services/market_update/market-update.service';


@Component({
  selector: 'app-financing-cost',
  templateUrl: './financing-cost.component.html',
  styleUrls: ['./financing-cost.component.css']
})
export class FinancingCostComponent {

  constructor(
    private tableConfig : TableServicesService,
    private marketUpdateService  : MarketUpdateService
    ) {  }

  tableDataFincost: any;
  tableFincost:any

  ngAfterViewInit(): void {
    this.tableConfig.initializeTableDataFincost();
    this.marketUpdateService.fetchDataKurs();
  }
  //filter table 
  isCheckedId: boolean = true;
  isCheckedCreateDate: boolean = true;
  isCheckedCreateBy: boolean = true;
  isCheckedStatus: boolean = true;
  isCheckedType: boolean = true;
  isCheckedBank: boolean = true;
  isCheckedTglIndicative: boolean = true;
  isCheckedApprover: boolean = true;
  isCheckedModifDate: boolean = true;
  isCheckedNotes: boolean = true;
  isCheckedRevisionDate: boolean = true;

  columnToHideId: string = 'id';
  columnToHideCreateDate: string = 'createDate';
  columnToHideCreateBy: string = 'createBy';
  columnToHideStatus: string = 'status';
  columnToHideType: string = 'type';
  columnToHideBank: string = 'bank';
  columnToHideTglindicative: string = 'tgl_indicative';
  columnToHideApprover: string = 'approver';
  columnToHideModifDate: string = 'modifDate';
  columnToHideNotes: string = 'notes';
  columnToHideRevisionDate: string = 'revisionDate';

  toggleColumnVisibilityId() {
    if (this.isCheckedId) {
      this.tableConfig.tableFincost.showColumn(this.columnToHideId);
    } else {
      this.tableConfig.tableFincost.hideColumn(this.columnToHideId); 
    }
  }

  toggleColumnVisibilityCreateDate() {
    if (this.isCheckedCreateDate) {
      this.tableConfig.tableFincost.showColumn(this.columnToHideCreateDate);
    } else {
      this.tableConfig.tableFincost.hideColumn(this.columnToHideCreateDate); 
    }
  }

  toggleColumnVisibilityCreateBy() {
    if (this.isCheckedCreateBy) {
      this.tableConfig.tableFincost.showColumn(this.columnToHideCreateBy);
    } else {
      this.tableConfig.tableFincost.hideColumn(this.columnToHideCreateBy); 
    }
  }

  toggleColumnVisibilityStatus() {
    if (this.isCheckedStatus) {
      this.tableConfig.tableFincost.showColumn(this.columnToHideStatus);
    } else {
      this.tableConfig.tableFincost.hideColumn(this.columnToHideStatus); 
    }
  }

  toggleColumnVisibilityType() {
    if (this.isCheckedType) {
      this.tableConfig.tableFincost.showColumn(this.columnToHideType);
    } else {
      this.tableConfig.tableFincost.hideColumn(this.columnToHideType); 
    }
  }

  toggleColumnVisibilityBank() {
    if (this.isCheckedBank) {
      this.tableConfig.tableFincost.showColumn(this.columnToHideBank);
    } else {
      this.tableConfig.tableFincost.hideColumn(this.columnToHideBank); 
    }
  }

  toggleColumnVisibilityTglindicative() {
    if (this.isCheckedTglIndicative) {
      this.tableConfig.tableFincost.showColumn(this.columnToHideTglindicative);
    } else {
      this.tableConfig.tableFincost.hideColumn(this.columnToHideTglindicative); 
    }
  }

  toggleColumnVisibilityApprover() {
    if (this.isCheckedApprover) {
      this.tableConfig.tableFincost.showColumn(this.columnToHideApprover);
    } else {
      this.tableConfig.tableFincost.hideColumn(this.columnToHideApprover); 
    }
  }

  toggleColumnVisibilityModifDate() {
    if (this.isCheckedModifDate) {
      this.tableConfig.tableFincost.showColumn(this.columnToHideModifDate);
    } else {
      this.tableConfig.tableFincost.hideColumn(this.columnToHideModifDate); 
    }
  }

  toggleColumnVisibilityNotes() {
    if (this.isCheckedNotes) {
      this.tableConfig.tableFincost.showColumn(this.columnToHideNotes);
    } else {
      this.tableConfig.tableFincost.hideColumn(this.columnToHideNotes); 
    }
  }

  toggleColumnVisibilityRevisionDate() {
    if (this.isCheckedRevisionDate) {
      this.tableConfig.tableFincost.showColumn(this.columnToHideRevisionDate);
    } else {
      this.tableConfig.tableFincost.hideColumn(this.columnToHideRevisionDate); 
    }
  }

  openModal: boolean = false;

  openModalfincost(){
    this.openModal = !this.openModal;
  }

  openModalfootnote(){
    this.openModal = !this.openModal;
  }

}
