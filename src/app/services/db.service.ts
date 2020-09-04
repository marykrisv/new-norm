import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ToolConfig } from '../common/toolconfig';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  apiUrl;

  constructor(public http: HttpClient) { }

  viewAll(): Observable<any> {
    return this.http.get<any>('http://'+ToolConfig.url+this.apiUrl+'view-all.php')
    .pipe(catchError(this.handleError));
  }

  create(data: any): Observable<any> {
    return this.http.post('http://'+ToolConfig.url+this.apiUrl+'create', 
    JSON.stringify(data))
    .pipe(catchError(this.handleError));
  }

  viewDetail(id: number): Observable<any> {
    return this.http.get('http://'+ToolConfig.url+this.apiUrl+'view-detail.php?id='+id)
    .pipe(catchError(this.handleError));
  }

  update(data: any): Observable<any> {
    return this.http.put('http://'+ToolConfig.url+this.apiUrl+'update', 
    JSON.stringify(data))
    .pipe(catchError(this.handleError));
  }

  delete(data: any): Observable<any> {
    return this.http.put('http://'+ToolConfig.url+this.apiUrl+'delete', 
    JSON.stringify(data))
    .pipe(catchError(this.handleError));
  }

  handleError(error) {
    console.log(error);
    return throwError("Connection Problem. Please check your internet."); 
  }

  setApiUrl(url: string) {
    this.apiUrl = url;
  }
}
