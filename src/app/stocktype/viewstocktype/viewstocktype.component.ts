import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { StocktypeInterface } from 'src/app/interface/stocktype.interface';
import { SessionInterface } from 'src/app/interface/session.interface';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { StocktypeService } from 'src/app/services/stocktype.service';
import { ErrorHandling } from 'src/app/common/error-handling';

@Component({
  selector: 'app-viewstocktype',
  templateUrl: './viewstocktype.component.html',
  styleUrls: ['./viewstocktype.component.scss']
})
export class ViewstocktypeComponent implements OnInit {

  stocktypes: StocktypeInterface[] = null;
  userSession: SessionInterface;

  totalIcCount: number;

  loading: boolean = false;

  ssSearchInput: string = null;

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
    private ssService: StocktypeService,
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.auth.currentSession.subscribe(currentSession => {
      this.userSession = currentSession;
    });

    this.data.changeTitle('List of Stock Type(s)');

    this.viewAllStocktype();
  }

  viewAllStocktype () {
    this.ssService.viewAllStocktype().then(response => {
      this.populateStocktype(response);
    }).catch(response => {
      alert("Connection Problem. Please check your internet.");
    });
  }

  populateStocktype(response) {
    this.loading = true;
    if (response['data'] != undefined) {
      this.stocktypes = <StocktypeInterface[]>response['data'];
      this.totalIcCount = response['data'][0]['total'];
    } else {
      this.stocktypes = null;
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

  deleteStocktype (ssId) {
    if (confirm('Are you sure you want to delete this stocktype?')) {
      const stocktype = {
        ssId: ssId,
        ssModifiedOn: new Date(),
        ssModifiedBy: this.userSession.userId
      }
      this.ssService.deleteStocktype(stocktype).then(response => {
        if (response['success'] == true) {
          alert(response['message']);
          
          //delete row
          this.deleteRow(ssId);

        } else {
          alert(ErrorHandling.showError(response));
        }
      }).catch(response => {
        alert("Connection Problem. Please check your internet.");
      });
    }
  }

  deleteRow (ssId) {
    for(let i = 0; i < this.stocktypes.length; ++i){
      if (this.stocktypes[i].ssId === ssId) {
          this.stocktypes.splice(i,1);
          this.totalIcCount--;
          break;
      }
    }
  }

  get searchInput () {
    return this.options.get('search');
  }

}
