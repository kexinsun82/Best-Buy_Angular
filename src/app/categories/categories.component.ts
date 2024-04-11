import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServersService } from '../servers/servers.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit, OnDestroy {

  items: any[] = [];
  paramsSubscription: Subscription = new Subscription();
  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log(this.serversService.filterServer('TVs'));

    this.paramsSubscription = this.route.params.subscribe
    ((params: Params) => {
      this.items = this.serversService.getServersByCategory(params['category']);

    })
  }

  ngOnDestroy() {
    console.log("Unsubscribe");
    this.paramsSubscription.unsubscribe();
  }

  toInteriorPage() {
        this.router.navigate(['interior-product']);
      }

}