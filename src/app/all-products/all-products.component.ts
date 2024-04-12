import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers/servers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent implements OnInit {
 
  products: any[] = [];

  constructor(private serversService: ServersService, private router: Router) { }

  ngOnInit() {
    this.products = this.serversService.getServers();
  }

  toInteriorPage(productId: number) {
    this.router.navigate(['/product', productId]);
  }



}