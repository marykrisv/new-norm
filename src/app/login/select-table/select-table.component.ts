import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-table',
  templateUrl: './select-table.component.html',
  styleUrls: ['./select-table.component.scss']
})
export class SelectTableComponent implements OnInit {

  title = "Choose Table";
  view = 'choose-table';
  warning = null;

  form = new FormGroup({
    table_no: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  next() {

  }

  resetWarningMessage() {

  }

}
