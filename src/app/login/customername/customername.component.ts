import { AuthService } from './../../auth/auth.service';
import { ErrorHandling } from './../../common/error-handling';
import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomertableService } from 'src/app/services/customertable.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { CustomertableInterface } from 'src/app/interface/customertable.interface';
import { CustomerorderService } from 'src/app/services/customerorder.service';
import { UserType } from 'src/app/interface/session.interface';

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
    private customer: CustomerService,
    private order: CustomerorderService,
    private router: Router,
    private auth: AuthService
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
    let order = {
      'coCtId': this.tableId,
      'coStatus' : 'Pending'
    }

    this.order.create(order).subscribe(response => {    
      var coId;
      if (response['success']) {
        coId = response['coId'];
        this.createCustomer(coId);
      } else {
        if (response['errorCode'] == '05') {          
          coId = response['data']['coId'];
          this.createCustomer(coId);
        } else if (response['errorCode'] == '03') {
          //do nothing
        } else {
          ErrorHandling.showError(response);
        }
      }
    });
  }

  createCustomer(coId) {    
    let name = this.customerNameInput.value.toString().trim();

    let customer = {
      'cIdNo' : '202008200001',
      'cName': name,
      'cCoId' : coId,
      'cCreatedBy' : 0
    }

    this.customer.create(customer).subscribe(response => {
      if (response['success'] == true) {
        localStorage.setItem('table', this.tableId);
        localStorage.setItem('customer-name', name);
        localStorage.setItem('customer-id', response['cId']);
        localStorage.setItem('user-type', 'customer');

        this.router.navigate(['/menu']);
      } else {
        alert(ErrorHandling.showError(response));
      }
    });
    
  }

  resetWarningMessage() {

  }

  get customerNameInput () {
    return this.form.get('customerName');
  }

}
