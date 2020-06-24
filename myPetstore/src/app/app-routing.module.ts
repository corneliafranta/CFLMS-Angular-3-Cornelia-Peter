import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { DogProductsComponent } from './dog-products/dog-products.component';
import { CatProductsComponent } from './cat-products/cat-products.component';
import { RodentsProductsComponent } from './rodents-products/rodents-products.component';

import { ProductDetailComponent } from './product-detail/product-detail.component';



const routes: Routes = [

  {
    path: '', component: HomeComponent
  }, {
    path: 'cart', component: CartComponent
  }, {
    path: 'about', component: AboutComponent
  }, {

    path: 'product-details', component: ProductDetailComponent
  }, {

    path: 'dogs', component: DogProductsComponent
  }, {

    path: 'cats', component: CatProductsComponent
  }, {

    path: 'rodents', component: RodentsProductsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
