import { MenucategoryService } from 'src/app/services/menucategory.service';
import { MenuService } from './../../services/menu.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PhoneValidator } from 'src/app/validators/phone.validator';

@Component({
  selector: 'app-viewmenu',
  templateUrl: './viewmenu.component.html',
  styleUrls: ['./viewmenu.component.scss']
})
export class ViewmenuComponent implements OnInit {

  menus;
  categories;
  specialcategories;

  categoryType: string;

  categoryForm = new FormGroup({
    categoryname: new FormControl('All')
  });

  constructor(
    private menuService: MenuService,
    private menuCategoryService: MenucategoryService
  ) { }

  ngOnInit(): void {
    this.viewAllMenu();
    this.viewAllMenuCategoryNonSpecial();
    this.viewAllMenuCategorySpecial();
  }

  viewAllMenuCategoryNonSpecial() {
    this.menuCategoryService.viewAllNonSpecial().subscribe(response => {
      if (response['data'] != undefined) {
        this.categories = response['data'];
      } else {
        this.categories = null;
      }
    });
  }

  viewAllMenuCategorySpecial() {
    this.menuCategoryService.viewAllSpecial().subscribe(response => {
      if (response['data'] != undefined) {
        this.specialcategories = response['data'];
      } else {
        this.specialcategories = null;
      }
    });
  }

  viewAllMenu () {
    this.menuService.viewAll().subscribe(response => {
      this.populateMenu(response);
    }, (error) => {
      alert(error);
    });
  }
  
  viewAllMenuNonSpecial(mcId) {
    this.menuService.viewAllMenuNonSpecial(mcId).subscribe(response => {
      this.populateMenu(response);
    }, (error) => {
      alert(error);
    });
  }

  viewAllMenuSpecial(mcId) {
    this.menuService.viewAllMenuSpecial(mcId).subscribe(response => {
      this.populateMenu(response);
    }, (error) => {
      alert(error);
    });
  }

  populateMenu(response) {
    // this.loading = true;
    if (response['data'] != undefined) {
      // this.concentrations = <ConcentrationInterface[]>response['data'];
      // this.totalConCount = response['data'][0]['total'];
      this.menus = response['data'];
    } else {
      // this.concentrations = null;
      // this.totalConCount = 0;
      // alert(ErrorHandling.showError(response));
      this.menus = null;
    }
    // this.loading = false;
  }

  changeCategoryType (value: string) {
    this.categoryType = value;

    this.selectCategory();
  }

  selectCategory() {
    let category = this.categorynameInput.value;

    if (this.categoryType == 'all') {
      this.viewAllMenu();
    } else if (this.categoryType == 'non-special') {
      this.viewAllMenuNonSpecial(category);
    } else {
      this.viewAllMenuSpecial(category);
    }
  }

  get categorynameInput () {
    return this.categoryForm.get('categoryname');
  }

}
