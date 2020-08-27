import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { SessionInterface } from 'src/app/interface/session.interface';
import { UomInterface } from 'src/app/interface/uom.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UomService } from 'src/app/services/uom.service';
import { ErrorHandling } from 'src/app/common/error-handling';

@Component({
  selector: 'app-uomdetail',
  templateUrl: './uomdetail.component.html',
  styleUrls: ['./uomdetail.component.scss']
})
export class UomdetailComponent implements OnInit {

  userSession: SessionInterface;
  uomDetails: UomInterface = null;
  uomId;

  //adding status
  stillUpdatingUom: boolean = false;
  stillDeletingUom: boolean = false;

  updated: boolean = false;

  uomForm = new FormGroup({
    value: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('',  Validators.minLength(2))
  });

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private uomService: UomService,
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.auth.currentSession.subscribe(
      currentSession => this.userSession = currentSession
    );

    this.route.paramMap.subscribe(params => {
      this.uomId = params.get('uomId');
    });

    this.data.changeTitle('Uom Detail');

    this.populateDetails();
  }

  back() {
    if ((this.uomForm.touched || this.uomForm.dirty) && !this.updated) {
      if (confirm('Are you sure you want to leave?')) {
        this.router.navigate(['/menu/uoms']);
      }
    } else {
      this.router.navigate(['/menu/uoms']);
    }
  }

  populateDetails () {    
    this.uomService.viewUomDetail(this.uomId).then(response => {
      if (response['data'] != null) {
        this.uomDetails = <UomInterface>response['data'][0];

        this.intializeForm();
      } else {
        alert(ErrorHandling.showError(response));
      }
    }).catch(response => {
      alert("Connection Problem. Please check your internet.");
    });
  }

  intializeForm() {
    if (this.uomDetails != null) {
      this.valueInput.setValue(this.uomDetails.uomValue);
      this.descriptionInput.setValue(this.uomDetails.uomDescription);
    }
  }

  updateUom() {
    if (confirm('Are you sure you want to update this uom?')) {
      this.stillUpdatingUom = true;
      const uom = {
        uomValue: this.valueInput.value,
        uomDescription: this.descriptionInput.value,
        uomModifiedBy: this.userSession.userId,
        uomModifiedOn: new Date(),
        uomId: this.uomDetails.uomId
      }
      this.uomService.updateUom(uom).then(response => {
        if (response['success'] == true) {
          alert(response['message']);

          this.updated = true;
        } else {
          alert(ErrorHandling.showError(response));
        }        
      }).catch(response => {
        alert("Connection Problem. Please check your internet.");
      }).finally(() => {
        this.stillUpdatingUom = false;
      });
    }
  }

  deleteUom() {
    if (confirm('Are you sure you want to delete this uom?')) {
      this.stillDeletingUom = true;
      const uom = {
        uomModifiedBy: this.userSession.userId,
        uomModifiedOn: new Date(),
        uomId: this.uomDetails.uomId
      }
      this.uomService.deleteUom(uom).then(response => {
        if (response['success'] == true) {
          alert(response['message']);
          this.router.navigate(["/menu/uoms"]);
        } else {
          alert(ErrorHandling.showError(response));
        }        
      }).catch(response => {
        alert("Connection Problem. Please check your internet.");
      }).finally(() => {
        this.stillDeletingUom = false;
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
    return this.uomForm.get('value');
  }

  get descriptionInput() {
    return this.uomForm.get('description');
  }

}
