import { ProductsServices } from './services/producrs.services';
import { IProduct } from './modules/product';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app-home.html'
  // styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular App';

  products: IProduct[] = [];

  constructor(private ProductsServices: ProductsServices){}

  ngOnInit(): void {
    this.ProductsServices.getAll().subscribe(prod => {
      this.products = prod
    })
  }
}
