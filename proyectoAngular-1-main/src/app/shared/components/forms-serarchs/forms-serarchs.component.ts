import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms-search',
  template: `
    <input
      #inputSearch
      auntofocus
      tipe="text"
      class="form-control-lg"
      placeholder="Search....."
      (keyup)="onSearch(inputSearch.value)"
    />
  `,

  styles: ['input{width:100%;}'],
})
export class FormsSerarchsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  onSearch(value: String) {
    if (value && value.length > 3) {
      this.router.navigate(['/character-list'], {
        queryParams: { q: value },
      });
    }
  }
}
