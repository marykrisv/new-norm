import { Component, OnInit } from '@angular/core';
import { SessionInterface } from 'src/app/interface/session.interface';
import { MenucategoryInterface } from 'src/app/interface/menucategory.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MenucategoryService } from 'src/app/services/menucategory.service';
import { ErrorHandling } from 'src/app/common/error-handling';

@Component({
  selector: 'app-menucategorydetail',
  templateUrl: './menucategorydetail.component.html',
  styleUrls: ['./menucategorydetail.component.scss']
})
export class MenucategorydetailComponent implements OnInit {

  userSession: SessionInterface;
  mcDetails: MenucategoryInterface = null;
  mcId;

  //adding status
  stillUpdatingMenucategory: boolean = false;
  stillDeletingMenucategory: boolean = false;

  updated: boolean = false;

  mcForm = new FormGroup({
    value: new FormControl('', [Validators.required, Validators.minLength(2)]),
    specialCategory: new FormControl(false)
  });

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private mcService: MenucategoryService
  ) { }

  ngOnInit(): void {
    this.auth.currentSession.subscribe(
      currentSession => this.userSession = currentSession
    );

    this.route.paramMap.subscribe(params => {
      this.mcId = params.get('mcId');
    });

    this.populateDetails();
  }

  back() {
    if ((this.mcForm.touched || this.mcForm.dirty) && !this.updated) {
      if (confirm('Are you sure you want to leave?')) {
        this.router.navigate(['/menu/menu-categories']);
      }
    } else {
      this.router.navigate(['/menu/menu-categories']);
    }
  }

  populateDetails () {    
    this.mcService.viewMenucategoryDetail(this.mcId).then(response => {
      if (response['data'] != null) {
        this.mcDetails = <MenucategoryInterface>response['data'][0];

        this.intializeForm();
      } else {
        alert(ErrorHandling.showError(response));
      }
    }).catch(response => {
      alert("Connection Problem. Please check your internet.");
    });
  }

  intializeForm() {
    if (this.mcDetails != null) {
      this.valueInput.setValue(this.mcDetails.mcValue);
      this.specialCategoryInput.setValue(+this.mcDetails.mcSpecialCategory);
    }
  }

  updateMenucategory() {
    if (confirm('Are you sure you want to update this menucategory?')) {
      this.stillUpdatingMenucategory = true;
      const menucategory = {
        mcValue: this.valueInput.value,
        mcSpecialCategory: this.specialCategoryInput.value,
        mcModifiedBy: this.userSession.userId,
        mcModifiedOn: new Date(),
        mcId: this.mcDetails.mcId
      }
      this.mcService.updateMenucategory(menucategory).then(response => {
        if (response['success'] == true) {
          alert(response['message']);

          this.updated = true;
        } else {
          alert(ErrorHandling.showError(response));
        }        
      }).catch(response => {
        alert("Connection Problem. Please check your internet.");
      }).finally(() => {
        this.stillUpdatingMenucategory = false;
      });
    }
  }

  deleteMenucategory() {
    if (confirm('Are you sure you want to delete this menucategory?')) {
      this.stillDeletingMenucategory = true;
      const menucategory = {
        mcModifiedBy: this.userSession.userId,
        mcModifiedOn: new Date(),
        mcId: this.mcDetails.mcId
      }
      this.mcService.deleteMenucategory(menucategory).then(response => {
        if (response['success'] == true) {
          alert(response['message']);
          this.router.navigate(["/menu/menucategorys"]);
        } else {
          alert(ErrorHandling.showError(response));
        }        
      }).catch(response => {
        alert("Connection Problem. Please check your internet.");
      }).finally(() => {
        this.stillDeletingMenucategory = false;
      });
    }
  }

  clearAll() {
    if (confirm('Are you sure you want to clear all?')) {
      this.valueInput.setValue('');
      this.specialCategoryInput.setValue('');
    }
  }

  get valueInput() {
    return this.mcForm.get('value');
  }

  get specialCategoryInput() {
    return this.mcForm.get('specialCategory');
  }

}
