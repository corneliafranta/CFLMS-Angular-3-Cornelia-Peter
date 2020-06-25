import { Component, OnInit } from '@angular/core';
import { dogProducts } from '../dogProducts';

@Component({
  selector: 'app-dog-products',
  templateUrl: './dog-products.component.html',
  styleUrls: ['./dog-products.component.sass']
})
export class DogProductsComponent implements OnInit {
  dogProducts = dogProducts;
  constructor() { }

  ngOnInit() {
  }

}
