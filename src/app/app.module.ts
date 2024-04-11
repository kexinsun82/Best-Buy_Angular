import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CategoriesComponent } from './categories/categories.component';
import { InteriorProductComponent } from './interior-product/interior-product.component';
import { HomeComponent } from './home/home.component';
import { ServersService } from './servers/servers.service';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'allProducts', component: AllProductsComponent
  },
  {
    path: 'categories', component: CategoriesComponent
  },
  {
    path: 'categories/:category', component: CategoriesComponent
  },
  {
    path: 'interiorProduct', component: InteriorProductComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AllProductsComponent,
    CategoriesComponent,
    InteriorProductComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
