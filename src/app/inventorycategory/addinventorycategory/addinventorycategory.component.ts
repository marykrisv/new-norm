import { Component, OnInit } from '@angular/core';
import { SessionInterface } from 'src/app/interface/session.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { InventorycategoryService } from 'src/app/services/inventorycategory.service';
import { Router } from '@angular/router';
import { ErrorHandling } from 'src/app/common/error-handling';

@Component({
  selector: 'app-addinventorycategory',
  templateUrl: './addinventorycategory.component.html',
  styleUrls: ['./addinventorycategory.component.scss']
})
export class AddinventorycategoryComponent implements OnInit {

  userSession: SessionInterface;

  //adding status
  stillCreatingInventorycategory: boolean = false;

  added: boolean = false;

  icForm = new FormGroup({
    value: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('', Validators.minLength(2))
  });

  constructor(
    private auth: AuthService,
    private icService: InventorycategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth.currentSession.subscribe(
      currentSession => this.userSession = currentSession
    );
  }

  back() {
    if (this.icForm.touched && !this.added) {
      if (confirm('Are you sure you want to leave?')) {
        this.router.navigate(['/menu/inventory-categories']);
      }
    } else {
      this.router.navigate(['/menu/inventory-categories']);
    }
  }

  addNewInventorycategory() {
    if (confirm('Are you sure you want to save this menu ategory?')) {
      this.stillCreatingInventorycategory = true;
      const inventorycategory = {
        icValue: this.valueInput.value,
        icDescription: this.descriptionInput.value,
        icCreatedBy: this.userSession.userId
      }
      this.icService.createNewInventorycategory(inventorycategory).then(response => {
        if (response['success'] == true) {
          alert(response['message']);

          this.added = true;
        } else {
          alert(ErrorHandling.showError(response));
        }        
      }).catch(response => {
        console.log(response);
        alert("Connection Problem. Please check your internet.");
      }).finally(() => {
        this.stillCreatingInventorycategory = false;
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
