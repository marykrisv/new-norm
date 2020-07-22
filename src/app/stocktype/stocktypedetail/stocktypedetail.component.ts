import { Component, OnInit } from '@angular/core';
import { SessionInterface } from 'src/app/interface/session.interface';
import { StocktypeInterface } from 'src/app/interface/stocktype.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StocktypeService } from 'src/app/services/stocktype.service';
import { ErrorHandling } from 'src/app/common/error-handling';

@Component({
  selector: 'app-stocktypedetail',
  templateUrl: './stocktypedetail.component.html',
  styleUrls: ['./stocktypedetail.component.scss']
})
export class StocktypedetailComponent implements OnInit {

  userSession: SessionInterface;
  ssDetails: StocktypeInterface = null;
  ssId;

  //adding status
  stillUpdatingStocktype: boolean = false;
  stillDeletingStocktype: boolean = false;

  updated: boolean = false;

  ssForm = new FormGroup({
    value: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('', Validators.minLength(2))
  });

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private ssService: StocktypeService
  ) { }

  ngOnInit(): void {
    this.auth.currentSession.subscribe(
      currentSession => this.userSession = currentSession
    );

    this.route.paramMap.subscribe(params => {
      this.ssId = params.get('ssId');
    });

    this.populateDetails();
  }

  back() {
    if ((this.ssForm.touched || this.ssForm.dirty) && !this.updated) {
      if (confirm('Are you sure you want to leave?')) {
        this.router.navigate(['/menu/stock-types']);
      }
    } else {
      this.router.navigate(['/menu/stock-types']);
    }
  }

  populateDetails () {    
    this.ssService.viewStocktypeDetail(this.ssId).then(response => {
      if (response['data'] != null) {
        this.ssDetails = <StocktypeInterface>response['data'][0];

        this.intializeForm();
      } else {
        alert(ErrorHandling.showError(response));
      }
    }).catch(response => {
      alert("Connection Problem. Please check your internet.");
    });
  }

  intializeForm() {
    if (this.ssDetails != null) {
      this.valueInput.setValue(this.ssDetails.ssValue);
      this.descriptionInput.setValue(this.ssDetails.ssDescription);
    }
  }

  updateStocktype() {
    if (confirm('Are you sure you want to update this stocktype?')) {
      this.stillUpdatingStocktype = true;
      const stocktype = {
        ssValue: this.valueInput.value.toString().trim(),
        ssDescription: this.descriptionInput.value.toString().trim(),
        ssModifiedBy: this.userSession.userId,
        ssModifiedOn: new Date(),
        ssId: this.ssDetails.ssId
      }
      this.ssService.updateStocktype(stocktype).then(response => {
        if (response['success'] == true) {
          alert(response['message']);

          this.updated = true;
        } else {
          alert(ErrorHandling.showError(response));
        }        
      }).catch(response => {
        alert("Connection Problem. Please check your internet.");
      }).finally(() => {
        this.stillUpdatingStocktype = false;
      });
    }
  }

  deleteStocktype() {
    if (confirm('Are you sure you want to delete this stocktype?')) {
      this.stillDeletingStocktype = true;
      const stocktype = {
        ssModifiedBy: this.userSession.userId,
        ssModifiedOn: new Date(),
        ssId: this.ssDetails.ssId
      }
      this.ssService.deleteStocktype(stocktype).then(response => {
        if (response['success'] == true) {
          alert(response['message']);
          this.router.navigate(["/menu/stocktypes"]);
        } else {
          alert(ErrorHandling.showError(response));
        }        
      }).catch(response => {
        alert("Connection Problem. Please check your internet.");
      }).finally(() => {
        this.stillDeletingStocktype = false;
      });
    }
  }

  clearAll() {
    if (confirm('Are you sure you want to clear all?')) {
      this.valueInput.setValue('');
      this.descriptionInput.setValue('');
    }
  }

  get valueInput() {
    return this.ssForm.get('value');
  }

  get descriptionInput() {
    return this.ssForm.get('description');
  }

}
