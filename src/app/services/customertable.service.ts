import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToolConfig } from '../common/toolconfig';

@Injectable({
  providedIn: 'root'
})
export class CustomertableService {

  apiUrl = "/newnorm/api/customertable/";

  constructor(private http: HttpClient) { }

  async viewAllCustomertable () {
    return await this.http.get('http://'+ToolConfig.url+this.apiUrl+'view-all-customertable.php')
    .toPromise();
  }

  async createNewCustomertable(customertable: any) {
    return await this.http.post('http://'+ToolConfig.url+this.apiUrl+'create-customertable', 
    JSON.stringify(customertable)).toPromise();
  }

  async viewCustomertableDetail (ctId: number) {
    return await this.http.get('http://'+ToolConfig.url+this.apiUrl+'view-customertable-detail.php?id='+ctId)
    .toPromise();
  }

  async updateCustomertable(customertable: any) {
    return await this.http.put('http://'+ToolConfig.url+this.apiUrl+'update-customertable', 
    JSON.stringify(customertable)).toPromise();
  }

  async deleteCustomertable(customertable: any) {
    return await this.http.put('http://'+ToolConfig.url+'/newnorm/api/customertable/delete-customertable', 
    JSON.stringify(customertable)).toPromise();
  }
}
