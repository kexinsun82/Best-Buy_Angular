import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers/servers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {

  constructor(private serversService: ServersService, private router: Router) {}

  ngOnInit() {
     
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

  toCategoriesPage() {
    this.router.navigate(['categories']);
  }
 


}
