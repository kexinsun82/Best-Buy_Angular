import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnDestroy {

  @ViewChild('categorySelect') categorySelect!: ElementRef<HTMLSelectElement>;
  private navigationSubscription!: Subscription;

  constructor(private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.categorySelect) {
          this.categorySelect.nativeElement.value = 'Select a Category...'; 
        }
      }
    });
  }

  ngOnDestroy() {
    this.navigationSubscription.unsubscribe();
  }

  homeCategories = [
    {
      cardName: 'Computers',
      image: "../../assets/images/laptops.png"
    },
    {
      cardName: 'TVs',
      image: "../../assets/images/tvs.png"
    },
    {
      cardName: 'Appliances',
      image: "../../assets/images/appliances.png"
    }
  ]

  toCategoriesPage(category: string) {
    if (category !== 'Select a Category...') {
      this.router.navigate(['/categories', category]);
    }
  }
}