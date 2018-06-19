import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from './../services/cribs.service';


@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

  @ViewChild('newCribForm') newCribForm: NgForm;


  constructor(
    private cribsService: CustomerService
  ) { }

  ngOnInit() {
  }

  onCribSubmit(data) {
    this.cribsService.addCrib(data);
    this.newCribForm.reset();
  }

}
