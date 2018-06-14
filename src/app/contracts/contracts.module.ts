import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContractServices } from './../services/contract.service';

import { ContractsComponent } from './contracts.component';
import { ListComponent } from './../contracts/list/list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ContractServices],
  declarations: [ContractsComponent, ListComponent],
  exports: [ContractsComponent]
})
export class ContractsModule { }
