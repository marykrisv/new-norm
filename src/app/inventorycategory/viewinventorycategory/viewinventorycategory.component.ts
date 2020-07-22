import { Component, OnInit } from '@angular/core';
import { InventorycategoryInterface } from 'src/app/interface/inventorycategory.interface';
import { SessionInterface } from 'src/app/interface/session.interface';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { InventorycategoryService } from 'src/app/services/inventorycategory.service';
import { ErrorHandling } from 'src/app/common/error-handling';

@Component({
  selector: 'app-viewinventorycategory',
  templateUrl: './viewinventorycategory.component.html',
  styleUrls: ['./viewinventorycategory.component.scss']
})
export class ViewinventorycategoryComponent implements OnInit {

  inventorycategorys: InventorycategoryInterface[] = null;
  userSession: SessionInterface;

  totalIcCount: number;

  loading: boolean = false;

  icSearchInput: string = null;

  filterBy: string = "";

  filterByList = [
    {
      filterString: 'Abr: ',
      sqlSearch: 'icAbr'
    },
    {
      filterString: 'Name: ',
      sqlSearch: 'icName'
    }
  ]

  options = new FormGroup({
    search: new FormControl(this.filterBy)
  });

  constructor(
    private auth: AuthService,
    private icService: InventorycategoryService
  ) { }

  ngOnInit(): void {
    this.auth.currentSession.subscribe(currentSession => {
      this.userSession = currentSession;
    });

    this.viewAllInventorycategory();
  }

  viewAllInventorycategory () {
    this.icService.viewAllInventorycategory().then(response => {
      this.populateInventorycategory(response);
    }).catch(response => {
      alert("Connection Problem. Please check your internet.");
    });
  }

  populateInventorycategory(response) {
    this.loading = true;
    if (response['data'] != undefined) {
      this.inventorycategorys = <InventorycategoryInterface[]>response['data'];
      this.totalIcCount = response['data'][0]['total'];
    } else {
      this.inventorycategorys = null;
      this.totalIcCount = 0;
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

  deleteInventorycategory (icId) {
    if (confirm('Are you sure you want to delete this inventorycategory?')) {
      const inventorycategory = {
        icId: icId,
        icModifiedOn: new Date(),
        icModifiedBy: this.userSession.userId
      }
      this.icService.deleteInventorycategory(inventorycategory).then(response => {
        if (response['success'] == true) {
          alert(response['message']);
          
          //delete row
          this.deleteRow(icId);

        } else {
          alert(ErrorHandling.showError(response));
        }
      }).catch(response => {
        alert("Connection Problem. Please check your internet.");
      });
    }
  }

  deleteRow (icId) {
    for(let i = 0; i < this.inventorycategorys.length; ++i){
      if (this.inventorycategorys[i].icId === icId) {
          this.inventorycategorys.splice(i,1);
          this.totalIcCount--;
          break;
      }
    }
  }

  get searchInput () {
    return this.options.get('search');
  }

}
