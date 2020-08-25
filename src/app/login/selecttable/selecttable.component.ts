import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomertableService } from 'src/app/services/customertable.service';
import { Router } from '@angular/router';
import { CustomertableInterface } from 'src/app/interface/customertable.interface';

@Component({
  selector: 'app-selecttable',
  templateUrl: './selecttable.component.html',
  styleUrls: ['./selecttable.component.scss']
})
export class SelecttableComponent implements OnInit {

  title = "Choose Table";
  warning = null;
  customer_tables;

  form = new FormGroup({
    tableNo: new FormControl('', Validators.required)
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
    let tableNo: number = this.tableNoInput.value;
    this.router.navigate(['customer-name/', tableNo]);
  }

  resetWarningMessage() {

  }

  get tableNoInput (){
    return this.form.get('tableNo');
  }

}
