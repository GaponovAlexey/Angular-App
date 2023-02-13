import { ErrorService } from './error.service';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, delay, catchError, throwError } from 'rxjs';
import { IProduct } from '../modules/product';
@Injectable({
  providedIn: 'root',
})
export class ProductsServices {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getAll(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams({
          fromObject: { limit: 5 },
        }),
      })
      .pipe(delay(200), catchError(this.errorHandler));
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => {
      error.message;
    });
  }
}
