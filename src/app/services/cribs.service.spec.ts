/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomerService } from './cribs.service';

describe('CustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerService]
    });
  });

  it('should ...', inject([CustomerService], (service: CustomerService) => {
    expect(service).toBeTruthy();
  }));
});
