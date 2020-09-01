import { DbService } from './db.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerorderService extends DbService {

  apiUrl = "/newnorm/api/customerorder/";

  ngOnInit () {
    super.setApiUrl(this.apiUrl);
  }
}
