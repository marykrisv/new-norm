import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomertableService } from 'src/app/services/customertable.service';
import { Router } from '@angular/router';
import { CustomertableInterface } from 'src/app/interface/customertable.interface';
import { isNull } from '@angular/compiler/src/output/output_ast';

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

    this.checkLocalStorage();
  }

  checkLocalStorage() {
    console.log(localStorage.getItem('customer-id') == null);
    if ((localStorage.getItem('customer-id') == '' || localStorage.getItem('customer-id') == null) || 
        (localStorage.getItem('table') == '' || localStorage.getItem('table') == null)) {
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['/menu']);
          console.log('test');
        }
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
