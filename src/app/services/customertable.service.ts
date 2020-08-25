import { DbService } from './db.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToolConfig } from '../common/toolconfig';

@Injectable({
  providedIn: 'root'
})
export class CustomertableService extends DbService{

  apiUrl = "/newnorm/api/customertable/";

  ngOnInit () {
    super.setApiUrl(this.apiUrl);
  }
}
