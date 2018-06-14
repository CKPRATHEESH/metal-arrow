import { Injectable } from '@angular/core';

import { Contracts } from './../models/contracts';

@Injectable()

export class ContractServices {
  private contract: Contracts[] = [{
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
  }];
  constructor() { }

  getContracts(): Contracts[] {
    return this.contract;
  }
}
