import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToolConfig } from '../common/toolconfig';

@Injectable({
  providedIn: 'root'
})
export class StocktypeService {

  apiUrl = "/newnorm/api/stocktype/";

  constructor(private http: HttpClient) { }

  async viewAllStocktype () {
    return await this.http.get('http://'+ToolConfig.url+this.apiUrl+'view-all-stocktype.php')
    .toPromise();
  }

  async createNewStocktype(stocktype: any) {
    return await this.http.post('http://'+ToolConfig.url+this.apiUrl+'create-stocktype', 
    JSON.stringify(stocktype))
    .toPromise();
  }

  async viewStocktypeDetail (icId: number) {
    return await this.http.get('http://'+ToolConfig.url+this.apiUrl+'view-stocktype-detail.php?id='+icId)
    .toPromise();
  }

  async updateStocktype(stocktype: any) {
    return await this.http.put('http://'+ToolConfig.url+this.apiUrl+'update-stocktype', 
    JSON.stringify(stocktype))
    .toPromise();
  }

  async deleteStocktype(stocktype: any) {
    return await this.http.put('http://'+ToolConfig.url+this.apiUrl+'delete-stocktype', 
    JSON.stringify(stocktype))
    .toPromise();
  }
}
