import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers/servers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent implements OnInit {
 
  public servers: {id: number, name: string, description: string, price: number, category: string, photo: string}[] = [];

  constructor(private serversService: ServersService, private router: Router) { }

  ngOnInit() {

  }

  toInteriorPage() {
    this.router.navigate(['interior-product']);
  }


}