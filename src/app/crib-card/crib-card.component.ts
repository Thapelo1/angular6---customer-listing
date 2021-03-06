import { by } from 'protractor';
import { Component, Input } from '@angular/core';
import { Customer } from './../customer';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent {

  @Input('crib') crib: Customer;

  constructor() {}

}
