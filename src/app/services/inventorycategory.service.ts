import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToolConfig } from '../common/toolconfig';

@Injectable({
  providedIn: 'root'
})
export class InventorycategoryService {

  apiUrl = "/newnorm/api/inventorycategory/";

  constructor(private http: HttpClient) { }

  async viewAllInventorycategory () {
    return await this.http.get('http://'+ToolConfig.url+this.apiUrl+'view-all-inventorycategory.php')
    .toPromise();
  }

  async createNewInventorycategory(inventorycategory: any) {
    return await this.http.post('http://'+ToolConfig.url+this.apiUrl+'create-inventorycategory', 
    JSON.stringify(inventorycategory))
    .toPromise();
  }

  async viewInventorycategoryDetail (icId: number) {
    return await this.http.get('http://'+ToolConfig.url+this.apiUrl+'view-inventorycategory-detail.php?id='+icId)
    .toPromise();
  }

  async updateInventorycategory(inventorycategory: any) {
    return await this.http.put('http://'+ToolConfig.url+this.apiUrl+'update-inventorycategory', 
    JSON.stringify(inventorycategory))
    .toPromise();
  }

  async deleteInventorycategory(inventorycategory: any) {
    return await this.http.put('http://'+ToolConfig.url+this.apiUrl+'delete-inventorycategory', 
    JSON.stringify(inventorycategory))
    .toPromise();
  }
}
