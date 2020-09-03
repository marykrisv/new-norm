import { Injectable } from '@angular/core';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends DbService {

  apiUrl = "/newnorm/api/menu/";

  ngOnInit () {
    super.setApiUrl(this.apiUrl);
  }
}
