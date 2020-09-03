import { Injectable } from '@angular/core';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class MenucategoryService extends DbService {

  apiUrl = "/newnorm/api/menucategory/";

  ngOnInit () {
    super.setApiUrl(this.apiUrl);
  }

}
