import { IProduct } from './modules/product';
import { Component } from '@angular/core';
import { product as data } from './data/products';

@Component({
  selector: 'app-root',
  templateUrl: './app-home.html',
  // styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular App';
  products: IProduct[] = data;
}
