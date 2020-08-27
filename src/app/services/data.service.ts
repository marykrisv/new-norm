import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PrivilegeInterface } from '../interface/privilege.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private userPrivilege = new BehaviorSubject<PrivilegeInterface>(null);
  currentUserPrivilege = this.userPrivilege.asObservable();

  private title = new BehaviorSubject<string>(null);
  currentTitle = this.title.asObservable();


  constructor() { }

  changePrivilege (privilege: PrivilegeInterface) {
    this.userPrivilege.next(privilege);
  }

  changeTitle (title: string) {
    this.title.next(title);
  }
}


