import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { MenucategoryInterface } from 'src/app/interface/menucategory.interface';
import { SessionInterface } from 'src/app/interface/session.interface';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { MenucategoryService } from 'src/app/services/menucategory.service';
import { ErrorHandling } from 'src/app/common/error-handling';

@Component({
  selector: 'app-viewmenucategory',
  templateUrl: './viewmenucategory.component.html',
  styleUrls: ['./viewmenucategory.component.scss']
})
export class ViewmenucategoryComponent implements OnInit {

  menucategorys: MenucategoryInterface[] = null;
  userSession: SessionInterface;

  totalMcCount: number;

  loading: boolean = false;

  mcSearchInput: string = null;

  filterBy: string = "";

  filterByList = [
    {
      filterString: 'Abr: ',
      sqlSearch: 'mcAbr'
    },
    {
      filterString: 'Name: ',
      sqlSearch: 'mcName'
    }
  ]

  options = new FormGroup({
    search: new FormControl(this.filterBy)
  });

  constructor(
    private auth: AuthService,
    private mcService: MenucategoryService,
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.auth.currentSession.subscribe(currentSession => {
      this.userSession = currentSession;
    });

    this.data.changeTitle('List of Menu Category(s)');

    this.viewAllMenucategory();
  }

  viewAllMenucategory () {
    this.mcService.viewAllMenucategory().then(response => {
      this.populateMenucategory(response);
    }).catch(response => {
      alert("Connection Problem. Please check your internet.");
    });
  }

  populateMenucategory(response) {
    this.loading = true;
    if (response['data'] != undefined) {
      this.menucategorys = <MenucategoryInterface[]>response['data'];
      this.totalMcCount = response['data'][0]['total'];
    } else {
      this.menucategorys = null;
      this.totalMcCount = 0;
      // alert(ErrorHandling.showError(response));
    }
    this.loading = false;
  }

  changeFilterBy (filterBy: string) {
    // var prevFilterBy = this.filterBy;
    // this.filterBy = filterBy+": ";
    // if (this.searchInput.invalid) {
    //   this.searchInput.setValue(this.filterBy);
    // } else {
    //   this.locationSearchInput = this.searchInput.value.toString().trim();
    //   this.locationSearchInput = this.locationSearchInput.substr(prevFilterBy.length, this.locationSearchInput.length);

    //   if (this.locationSearchInput != null) {
    //     this.searchInput.setValue(this.filterBy+this.locationSearchInput);
    //   }
    // }   
  }

  search() {

  }

  removeFilter() {
    // this.locationSearchInput = null;
    // this.filterBy = "";
    // this.searchInput.setValue(this.filterBy);
    // this.viewAllLocation();
  }

  deleteMenucategory (mcId) {
    if (confirm('Are you sure you want to delete this menucategory?')) {
      const menucategory = {
        mcId: mcId,
        mcModifiedOn: new Date(),
        mcModifiedBy: this.userSession.userId
      }
      this.mcService.deleteMenucategory(menucategory).then(response => {
        if (response['success'] == true) {
          alert(response['message']);
          
          //delete row
          this.deleteRow(mcId);

        } else {
          alert(ErrorHandling.showError(response));
        }
      }).catch(response => {
        alert("Connection Problem. Please check your internet.");
      });
    }
  }

  deleteRow (mcId) {
    for(let i = 0; i < this.menucategorys.length; ++i){
      if (this.menucategorys[i].mcId === mcId) {
          this.menucategorys.splice(i,1);
          this.totalMcCount--;
          break;
      }
    }
  }

  get searchInput () {
    return this.options.get('search');
  }

}
