import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomertableService } from 'src/app/services/customertable.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  tableId;

  form = new FormGroup({
    customerName: new FormControl('', [Validators.required, Validators.minLength(2)])
  });

  constructor(
    private tableService: CustomertableService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.populateCustomerTable();

    this.route.paramMap.subscribe(params => {
      this.tableId = params.get('tableId');
    });
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
    localStorage.setItem('table', this.tableId);
    localStorage.setItem('customer-name', this.customerNameInput.value);
  }

  resetWarningMessage() {

  }

  get customerNameInput () {
    return this.form.get('customerName');
  }

}
