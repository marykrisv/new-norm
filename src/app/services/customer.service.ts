import { DbService } from './db.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends DbService {

  apiUrl = "/newnorm/api/customer/";

  ngOnInit () {
    super.setApiUrl(this.apiUrl);
  }

}
