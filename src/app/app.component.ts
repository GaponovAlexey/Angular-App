import { Observable, tap } from 'rxjs';
import { ProductsServices } from './services/producrs.services';
import { IProduct } from './modules/product';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app-home.html',
  // styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular App';
  loading = false;

  // products: IProduct[] = [];
  products$: Observable<IProduct[]>

  constructor(private ProductsServices: ProductsServices) {}

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.ProductsServices.getAll().pipe(
      tap(() => this.loading = false)
    )
  //   this.ProductsServices.getAll().subscribe((prod) => {
  //     this.products = prod;
  //     this.loading = false
    // });
  }
}
