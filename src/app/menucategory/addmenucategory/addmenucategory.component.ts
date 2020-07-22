import { Component, OnInit } from '@angular/core';
import { SessionInterface } from 'src/app/interface/session.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { MenucategoryService } from 'src/app/services/menucategory.service';
import { Router } from '@angular/router';
import { ErrorHandling } from 'src/app/common/error-handling';

@Component({
  selector: 'app-addmenucategory',
  templateUrl: './addmenucategory.component.html',
  styleUrls: ['./addmenucategory.component.scss']
})
export class AddmenucategoryComponent implements OnInit {

  userSession: SessionInterface;

  //adding status
  stillCreatingMenucategory: boolean = false;

  added: boolean = false;

  mcForm = new FormGroup({
    value: new FormControl('', [Validators.required, Validators.minLength(2)]),
    specialCategory: new FormControl(false)
  });

  constructor(
    private auth: AuthService,
    private mcService: MenucategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth.currentSession.subscribe(
      currentSession => this.userSession = currentSession
    );
  }

  back() {
    if (this.mcForm.touched && !this.added) {
      if (confirm('Are you sure you want to leave?')) {
        this.router.navigate(['/menu/menu-categories']);
      }
    } else {
      this.router.navigate(['/menu/menu-categories']);
    }
  }

  addNewMenucategory() {
    if (confirm('Are you sure you want to save this menu ategory?')) {
      this.stillCreatingMenucategory = true;
      const menucategory = {
        mcValue: this.valueInput.value,
        mcSpecialCategory: this.specialCategoryInput.value,
        mcCreatedBy: this.userSession.userId
      }
      this.mcService.createNewMenucategory(menucategory).then(response => {
        if (response['success'] == true) {
          alert(response['message']);

          this.added = true;
        } else {
          alert(ErrorHandling.showError(response));
        }        
      }).catch(response => {
        alert("Connection Problem. Please check your internet.");
      }).finally(() => {
        this.stillCreatingMenucategory = false;
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
