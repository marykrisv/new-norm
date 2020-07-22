import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToolConfig } from '../common/toolconfig';

@Injectable({
  providedIn: 'root'
})
export class MenucategoryService {

  apiUrl = "/newnorm/api/menucategory/";

  constructor(private http: HttpClient) { }

  async viewAllMenucategory () {
    return await this.http.get('http://'+ToolConfig.url+this.apiUrl+'view-all-menucategory.php')
    .toPromise();
  }

  async createNewMenucategory(menucategory: any) {
    console.log('http://'+ToolConfig.url+this.apiUrl+'create-menucategory');
    return await this.http.post('http://'+ToolConfig.url+this.apiUrl+'create-menucategory', 
    JSON.stringify(menucategory))
    .toPromise();
  }

  async viewMenucategoryDetail (mcId: number) {
    return await this.http.get('http://'+ToolConfig.url+this.apiUrl+'view-menucategory-detail.php?id='+mcId)
    .toPromise();
  }

  async updateMenucategory(menucategory: any) {
    return await this.http.put('http://'+ToolConfig.url+this.apiUrl+'update-menucategory', 
    JSON.stringify(menucategory))
    .toPromise();
  }

  async deleteMenucategory(menucategory: any) {
    return await this.http.put('http://'+ToolConfig.url+this.apiUrl+'delete-menucategory', 
    JSON.stringify(menucategory))
    .toPromise();
  }
}
