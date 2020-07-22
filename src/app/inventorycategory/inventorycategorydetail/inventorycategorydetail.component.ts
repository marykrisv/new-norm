import { Component, OnInit } from '@angular/core';
import { SessionInterface } from 'src/app/interface/session.interface';
import { InventorycategoryInterface } from 'src/app/interface/inventorycategory.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InventorycategoryService } from 'src/app/services/inventorycategory.service';
import { ErrorHandling } from 'src/app/common/error-handling';

@Component({
  selector: 'app-inventorycategorydetail',
  templateUrl: './inventorycategorydetail.component.html',
  styleUrls: ['./inventorycategorydetail.component.scss']
})
export class InventorycategorydetailComponent implements OnInit {

  userSession: SessionInterface;
  icDetails: InventorycategoryInterface = null;
  icId;

  //adding status
  stillUpdatingInventorycategory: boolean = false;
  stillDeletingInventorycategory: boolean = false;

  updated: boolean = false;

  icForm = new FormGroup({
    value: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('', Validators.minLength(2))
  });

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private icService: InventorycategoryService
  ) { }

  ngOnInit(): void {
    this.auth.currentSession.subscribe(
      currentSession => this.userSession = currentSession
    );

    this.route.paramMap.subscribe(params => {
      this.icId = params.get('icId');
    });

    this.populateDetails();
  }

  back() {
    if ((this.icForm.touched || this.icForm.dirty) && !this.updated) {
      if (confirm('Are you sure you want to leave?')) {
        this.router.navigate(['/menu/inventory-categories']);
      }
    } else {
      this.router.navigate(['/menu/inventory-categories']);
    }
  }

  populateDetails () {    
    this.icService.viewInventorycategoryDetail(this.icId).then(response => {
      if (response['data'] != null) {
        this.icDetails = <InventorycategoryInterface>response['data'][0];

        this.intializeForm();
      } else {
        alert(ErrorHandling.showError(response));
      }
    }).catch(response => {
      alert("Connection Problem. Please check your internet.");
    });
  }

  intializeForm() {
    if (this.icDetails != null) {
      this.valueInput.setValue(this.icDetails.icValue);
      this.descriptionInput.setValue(this.icDetails.icDescription);
    }
  }

  updateInventorycategory() {
    if (confirm('Are you sure you want to update this inventorycategory?')) {
      this.stillUpdatingInventorycategory = true;
      const inventorycategory = {
        icValue: this.valueInput.value.toString().trim(),
        icDescription: this.descriptionInput.value.toString().trim(),
        icModifiedBy: this.userSession.userId,
        icModifiedOn: new Date(),
        icId: this.icDetails.icId
      }
      this.icService.updateInventorycategory(inventorycategory).then(response => {
        if (response['success'] == true) {
          alert(response['message']);

          this.updated = true;
        } else {
          alert(ErrorHandling.showError(response));
        }        
      }).catch(response => {
        alert("Connection Problem. Please check your internet.");
      }).finally(() => {
        this.stillUpdatingInventorycategory = false;
      });
    }
  }

  deleteInventorycategory() {
    if (confirm('Are you sure you want to delete this inventorycategory?')) {
      this.stillDeletingInventorycategory = true;
      const inventorycategory = {
        icModifiedBy: this.userSession.userId,
        icModifiedOn: new Date(),
        icId: this.icDetails.icId
      }
      this.icService.deleteInventorycategory(inventorycategory).then(response => {
        if (response['success'] == true) {
          alert(response['message']);
          this.router.navigate(["/menu/inventorycategorys"]);
        } else {
          alert(ErrorHandling.showError(response));
        }        
      }).catch(response => {
        alert("Connection Problem. Please check your internet.");
      }).finally(() => {
        this.stillDeletingInventorycategory = false;
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
    return this.icForm.get('value');
  }

  get descriptionInput() {
    return this.icForm.get('description');
  }

}
