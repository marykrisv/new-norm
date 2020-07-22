import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToolConfig } from '../common/toolconfig';

@Injectable({
  providedIn: 'root'
})
export class InventorycategoryService {

  apiUrl = "/newnorm/api/inventorycategory/";

  constructor(private http: HttpClient) { }

  async viewAllConcentration () {
    return await this.http.get('http://'+ToolConfig.url+this.apiUrl+'view-all-inventorycategory.php')
    .toPromise();
  }

  async createNewConcentration(inventorycategory: any) {
    return await this.http.post('http://'+ToolConfig.url+this.apiUrl+'create-inventorycategory', 
    JSON.stringify(inventorycategory))
    .toPromise();
  }

  async viewConcentrationDetail (icId: number) {
    return await this.http.get('http://'+ToolConfig.url+this.apiUrl+'view-inventorycategory-detail.php?id='+icId)
    .toPromise();
  }

  async updateConcentration(inventorycategory: any) {
    return await this.http.put('http://'+ToolConfig.url+this.apiUrl+'update-inventorycategory', 
    JSON.stringify(inventorycategory))
    .toPromise();
  }

  async deleteConcentration(inventorycategory: any) {
    return await this.http.put('http://'+ToolConfig.url+this.apiUrl+'delete-inventorycategory', 
    JSON.stringify(inventorycategory))
    .toPromise();
  }
}
