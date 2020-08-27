import { DataService } from 'src/app/services/data.service';
import { SessionInterface } from '../interface/session.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuSelected: string;
  // userSession: SessionInterface;
  title;

  constructor(private auth: AuthService, private router: Router, private data: DataService) { }

  ngOnInit(): void {
    // this.auth.currentSession.subscribe(
    //   usersession => this.userSession = usersession
    // );

    this.data.currentTitle.subscribe(
      title => {
        this.title = title;
      }
    );
  }

  logout() {
    this.auth.changeSession(null);
    localStorage.clear();
    this.router.navigate(['/login']);    
  }

  showDropDown ($event) {
    $event.stopPropagation();
    var element = document.getElementById("dropdownMenu");
    element.classList.toggle("collapse");
  }

  openSideMenu ($event) {
    $event.stopPropagation();
    var element_wrapper = document.getElementById("wrapper");
    element_wrapper.classList.toggle("active");

    // var element_modalscreen = document.getElementById("modal-screen");
    // var screenWidth = window.innerWidth;
    // if (screenWidth <= 767) {
    //   if (!element_wrapper.classList.contains("active")) {
    //     element_modalscreen.style.display = "block";
    //   }
    // }
  }
}
