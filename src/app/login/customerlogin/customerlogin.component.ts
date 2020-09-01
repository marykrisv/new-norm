import { DataService } from './../../services/data.service';
import { UserType } from './../../interface/session.interface';
import { Component, OnInit } from '@angular/core';
import { CustomertableService } from './../../services/customertable.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomertableInterface } from 'src/app/interface/customertable.interface';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

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
    private router: Router,
    private auth: AuthService,
    private data: DataService
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

  setUsersession (response: any) {
    let usersession = {
      userId: response['data'][0]['userId'],
      userName: response['data'][0]['userName'],
      userType: UserType.customer
    };
    this.auth.changeSession(usersession);            
  }

  // setPrivileges (response: any) {
  //   let privilege = {
  //     priUserId: response['data'][0]['userId'],
  //     priDashboard: false,
  //     priUser: false,
  //     priInventory: false,
  //     priManage: false,
  //     priNotification: false,
  //     priPos: false,
  //     priMenu: true,
  //     priOrders: true,
  //     priTools: true
  //   }

  //   this.data.changePrivilege(privilege);
  // }

  next() {
    this.view = 'input-name';
  }

  resetWarningMessage() {

  }

}
