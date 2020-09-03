import { MenucategoryService } from 'src/app/services/menucategory.service';
import { MenuService } from './../../services/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewmenu',
  templateUrl: './viewmenu.component.html',
  styleUrls: ['./viewmenu.component.scss']
})
export class ViewmenuComponent implements OnInit {

  menus;
  categories;

  constructor(
    private menuService: MenuService,
    private menuCategoryService: MenucategoryService
  ) { }

  ngOnInit(): void {
    this.viewAllMenu();
    this.viewAllMenuCategory();
  }

  viewAllMenuCategory() {
    this.menuCategoryService.viewAll().subscribe(response => {
      if (response['data'] != undefined) {
        this.categories = response['data'];
      } else {
        this.categories = null;
      }
    });
  }

  viewAllMenu () {
    this.menuService.viewAll().subscribe(response => {
      this.populateConcentration(response);
    }, (error) => {
      alert(error);
    });
  }

  populateConcentration(response) {
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

  selectCategory() {
    console.log('test');
  }

}
