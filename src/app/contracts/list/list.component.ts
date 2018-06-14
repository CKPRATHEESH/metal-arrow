import { Component, OnInit } from '@angular/core';
import { Contracts } from './../../models/contracts';
import { ContractServices } from './../../services/contract.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private contract: Contracts[] /* = [{
    id: 1,
    contractRefNo: 'PC-123-EKA'
  }, {
      id: 1,
      contractRefNo: 'PC-124-EKA'
    }, {
      id: 1,
      contractRefNo: 'PC-125-EKA'
    }, {
      id: 1,
      contractRefNo: 'PC-126-EKA'
    }, {
      id: 1,
      contractRefNo: 'PC-127-EKA'
    }] */;

  constructor(private contractServices: ContractServices) { }

  ngOnInit() {
    this.contract = this.contractServices.getContracts();
  }

}
