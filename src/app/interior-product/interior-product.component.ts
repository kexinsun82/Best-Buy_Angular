import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers/servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-interior-product',
  templateUrl: './interior-product.component.html',
  styleUrl: './interior-product.component.scss'
})
export class InteriorProductComponent implements OnInit {
  product: any;
  paramsSubscription: Subscription = new Subscription();

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe
      ((params: Params) => {
        const productId = +params['id'];
        this.product = this.serversService.getProductById(productId);
      })
  }

  ngOnDestroy() {
    console.log("Unsubscribe");
    this.paramsSubscription.unsubscribe();
  }
}
