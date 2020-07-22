import { Component, OnInit } from '@angular/core';
import { SessionInterface } from 'src/app/interface/session.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { StocktypeService } from 'src/app/services/stocktype.service';
import { Router } from '@angular/router';
import { ErrorHandling } from 'src/app/common/error-handling';

@Component({
  selector: 'app-addstocktype',
  templateUrl: './addstocktype.component.html',
  styleUrls: ['./addstocktype.component.scss']
})
export class AddstocktypeComponent implements OnInit {

  userSession: SessionInterface;

  //adding status
  stillCreatingStocktype: boolean = false;

  added: boolean = false;

  ssForm = new FormGroup({
    value: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('', Validators.minLength(2))
  });

  constructor(
    private auth: AuthService,
    private ssService: StocktypeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth.currentSession.subscribe(
      currentSession => this.userSession = currentSession
    );
  }

  back() {
    if (this.ssForm.touched && !this.added) {
      if (confirm('Are you sure you want to leave?')) {
        this.router.navigate(['/menu/stock-types']);
      }
    } else {
      this.router.navigate(['/menu/stock-types']);
    }
  }

  addNewStocktype() {
    if (confirm('Are you sure you want to save this menu ategory?')) {
      this.stillCreatingStocktype = true;
      const stocktype = {
        ssValue: this.valueInput.value,
        ssDescription: this.descriptionInput.value,
        ssCreatedBy: this.userSession.userId
      }
      this.ssService.createNewStocktype(stocktype).then(response => {
        if (response['success'] == true) {
          alert(response['message']);

          this.added = true;
        } else {
          alert(ErrorHandling.showError(response));
        }        
      }).catch(response => {
        alert("Connection Problem. Please check your internet.");
      }).finally(() => {
        this.stillCreatingStocktype = false;
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
