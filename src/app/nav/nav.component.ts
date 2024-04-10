import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  constructor(private router: Router) { }

  onCategoryChange(category: string) {
    if (category !== 'Select a Category...') {
      this.router.navigate(['/categories', category]);
    }
  }

}
