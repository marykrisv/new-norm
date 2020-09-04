import { Injectable } from '@angular/core';
import { DbService } from './db.service';
import { Observable, throwError } from 'rxjs';
import { ToolConfig } from '../common/toolconfig';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends DbService {

  apiUrl = "/newnorm/api/menu/";

  ngOnInit () {
    super.setApiUrl(this.apiUrl);
  }

  viewAllMenuSpecial(mcId): Observable<any> {
    return this.http.get<any>('http://'+ToolConfig.url+this.apiUrl+'view-by-special.php?mcid='+mcId)
    .pipe(catchError(this.handleError));
  }

  viewAllMenuNonSpecial(mcId): Observable<any> {
    return this.http.get<any>('http://'+ToolConfig.url+this.apiUrl+'view-by-nonspecial.php?mcid='+mcId)
    .pipe(catchError(this.handleError));
  }
}
