import { Injectable } from '@angular/core';
import { DbService } from './db.service';
import { Observable, throwError } from 'rxjs';
import { ToolConfig } from '../common/toolconfig';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenucategoryService extends DbService {

  apiUrl = "/newnorm/api/menucategory/";

  ngOnInit () {
    super.setApiUrl(this.apiUrl);
  }

  viewAllSpecial(): Observable<any> {
    return this.http.get<any>('http://'+ToolConfig.url+this.apiUrl+'view-all-special.php')
    .pipe(catchError(this.handleError));
  }

  viewAllNonSpecial(): Observable<any> {
    return this.http.get<any>('http://'+ToolConfig.url+this.apiUrl+'view-all-nonspecial.php')
    .pipe(catchError(this.handleError));
  }

}
