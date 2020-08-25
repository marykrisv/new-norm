import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomertableService } from 'src/app/services/customertable.service';
import { Router } from '@angular/router';
import { CustomertableInterface } from 'src/app/interface/customertable.interface';

@Component({
  selector: 'app-customername',
  templateUrl: './customername.component.html',
  styleUrls: ['./customername.component.scss']
})
export class CustomernameComponent implements OnInit {

  title = "Input Name";
  warning = null;
  customer_tables;

  form = new FormGroup({
    customerName: new FormControl('', Validators.required)
  });

  constructor(
    private tableService: CustomertableService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.populateCustomerTable();
  }

  populateCustomerTable() {
    this.tableService.viewAll().subscribe(response => {
      this.customer_tables = <CustomertableInterface[]> response['data'];
    }, (error) => {
      this.customer_tables = null;
      alert(error);
    });
  }
  confirm() {
    // this.view = 'input-name';
  }

  resetWarningMessage() {

  }

}
