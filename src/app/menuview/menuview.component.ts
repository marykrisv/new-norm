import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { SessionInterface, UserType } from '../interface/session.interface';
import { UserRole } from '../interface/user.interface';

@Component({
  selector: 'app-menuview',
  templateUrl: './menuview.component.html',
  styleUrls: ['./menuview.component.scss']
})
export class MenuviewComponent implements OnInit {

  currentSession: SessionInterface = null;

  constructor(private data: AuthService, private router: Router) {    
  }

  ngOnInit(): void {
    // this.data.currentSession.subscribe(currentSession => this.currentSession = currentSession);

    
    // if (this.currentSession != null) {    
    //   console.log(this.currentSession);
    //   if (this.currentSession.userType == UserType.customer) {
    //     //redirect to login
    //     // this.router.navigate(["/menu"]);
    //   }  
    // } else {
    //   //redirect to login
    //   // this.router.navigate(["/login"]);
    // }
    this.checkLocalStorage();
  }

  checkLocalStorage() {
    if ((localStorage.getItem('customer-id') == '' || localStorage.getItem('customer-id') == null) || 
        (localStorage.getItem('table') == '' || localStorage.getItem('table') == null)) {
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['/menu']);
        }
  }
}
