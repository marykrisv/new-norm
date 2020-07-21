import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToolConfig } from '../common/toolconfig';

@Injectable({
  providedIn: 'root'
})
export class PrivilegeService {

  apiUrl = "/newnorm/api/privilege/";

  constructor(private http: HttpClient) { }

  async updatePrivilege (user: any) {
    return await this.http.post('http://'+ToolConfig.url+this.apiUrl+'update-privilege', 
    JSON.stringify(user)).toPromise();
  }

  async getPrivilege (userId: number) {
    return await this.http.get('http://'+ToolConfig.url+this.apiUrl+'get-privilege.php?id='+userId).toPromise();
  }

  async createPrivilege (privilege: any) {
    return await this.http.post('http://'+ToolConfig.url+this.apiUrl+'create-privilege', 
    JSON.stringify(privilege)).toPromise();
  }
}
