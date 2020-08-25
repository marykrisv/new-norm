import { Component, OnInit } from '@angular/core';
import { CustomertableService } from './../../services/customertable.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomertableInterface } from 'src/app/interface/customertable.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.scss']
})
export class CustomerloginComponent implements OnInit {

  title = "Choose Table";
  view = 'choose-table';
  warning = null;
  customer_tables;

  form = new FormGroup({
    table_no: new FormControl('', Validators.required)
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

  next() {
    this.view = 'input-name';
  }

  resetWarningMessage() {

  }

}
