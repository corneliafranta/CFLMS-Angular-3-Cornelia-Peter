import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProcuctDetailComponent } from './procuct-detail/procuct-detail.component';


const routes: Routes = [

  {
    path: '', component: HomeComponent
  }, {
    path: 'cart', component: CartComponent
  }, {
    path: 'about', component: AboutComponent
  }, {
    path: 'products', component: ProductsComponent
  }, {
    path: 'product-details', component: ProcuctDetailComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
